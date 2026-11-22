// lancé par le test « local » de NeoDex : plein écran, touches tapées alors que NeoDex a le clavier, puis fluidité en jeu
module.exports = async ({ pj, js, sleep }) => {
  await pj(`document.querySelector('#rhSongs .rhSong .btn')?.click(), 0`); await sleep(9000);  // un morceau intégré (son rendu prend quelques secondes)
  await pj(`document.getElementById('rhFs').click(), 0`); await sleep(1200);
  const fs = await pj(`!!document.fullscreenElement`);
  await pj(`document.exitFullscreen?.().catch(() => {}), 0`); await sleep(800);
  if (!fs) throw new Error('le plein écran ne s\'ouvre pas');
  const shot = () => pj(`(() => { const c = document.getElementById('rhCanvas'), g = c.getContext('2d').getImageData(0, 0, c.width, c.height).data; let h = 0; for (let i = 0; i < g.length; i += 397) h = (h * 31 + g[i]) | 0; return h; })()`);
  // la page NeoDex reprend le clavier, puis espace : la partie doit démarrer quand même
  await js(`document.activeElement?.blur(), document.body.focus(), document.body.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', code: 'Space', bubbles: true })), 0`);
  await sleep(3000); const a = await shot(); let b = a;
  for (let i = 0; i < 24 && a === b; i++) { await sleep(500); b = await shot(); }  // l'intro d'un morceau lent peut durer 10 s sans note : l'image bouge à la première note
  if (a === b) throw new Error('espace tapé dans NeoDex n\'a pas lancé la partie');
  const muts = await pj(`new Promise(ok => { let n = 0; const o = new MutationObserver(m => { n += m.length; }); o.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true }); setTimeout(() => { o.disconnect(); ok(n); }, 2000); })`);
  if (muts > 20) throw new Error('la page change ' + muts + ' fois en 2 s pendant le jeu (le rendu en pixels repasse sur toute la page)');
  const r = await pj(`new Promise(ok => { const d = []; let l = performance.now(), n = 0; const f = t => { d.push(t - l); l = t; if (++n < 240) requestAnimationFrame(f); else ok(d); }; requestAnimationFrame(f); })`);
  const s = [...r].sort((x, y) => x - y), avg = r.reduce((x, y) => x + y, 0) / r.length, p95 = s[Math.floor(s.length * .95)], slow = r.filter(x => x > 25).length;
  if (1000 / avg < 50 || slow > 12) throw new Error('saccades : ' + Math.round(1000 / avg) + ' i/s, ' + slow + ' images lentes');
  const pl = await pj(`(document.getElementById('rhCanvas').requestPointerLock(), new Promise(ok => setTimeout(() => ok(!!document.pointerLockElement), 600)))`);
  // fin du morceau avancée : l'écran de fin doit montrer la courbe de précision (une partie inventée : un passage plus difficile au milieu)
  await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(), L = rh.c.len, h = []; for (const n of rh.notes) n.judged = true; for (let i = 0; i < 200; i++) { const t = i / 200 * L; h.push([t, t > L * .4 && t < L * .6 ? +(i % 3 > 0) : +(i % 9 > 0)]); } rh.hist = h; rh.counts.PARFAIT = h.filter(x => x[1]).length; rh.t0 -= L + 3; return 0; })()`); await sleep(1500);
  const end = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return { mode: rh.mode, hist: rh.hist.length, shape: String(rh.tun.shape) }; })()`);
  if (end.mode !== 'over' || !end.hist) throw new Error('écran de fin sans courbe : ' + JSON.stringify(end));
  await pj(`document.exitPointerLock?.(), 0`);
  // 1.7.0 : le niveau du joueur monte, la carte des ratés est remplie
  const xp = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return [rh.xpGain > 0, rh.cells.reduce((a, c) => a + c[1], 0) >= 0, /NIVEAU \\d/.test(document.getElementById('thLvl').textContent)].join(); })()`);
  if (xp !== 'true,true,true') throw new Error('niveau du joueur : ' + xp);
  // revoir : la partie finie se rejoue avec le curseur noté ; la vitesse 1,5× fait avancer le morceau plus vite
  const rv = await pj(`(async () => { const rh = document.getElementById('rhCanvas').__rh(); if (rh.mode !== 'over' || !rh.rec.length) return 'pas de partie à revoir : ' + rh.mode + ' ' + rh.rec.length;
    document.dispatchEvent(new KeyboardEvent('keydown', {key: 'r', bubbles: true}));
    let r2; for (let i = 0; i < 60; i++) { await new Promise(r => setTimeout(r, 500)); r2 = document.getElementById('rhCanvas').__rh(); if (r2.mode === 'play') break; } return r2.replay?.length && r2.mode === 'play' ? 'ok' : 'revoir : ' + r2.mode; })()`).catch(e => 'revoir : ' + (e?.message || String(e)));
  if (rv !== 'ok') throw new Error(rv);
  await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); for (const n of rh.notes) n.judged = true; rh.t0 -= rh.c.len / rh.rate + 8; return 0; })()`); await sleep(1500);  // la partie revue finit tout de suite
  const rvEnd = await pj(`(() => { const rh = document.getElementById('rhCanvas').__rh(); return rh.mode === 'over' ? 'over' : rh.mode; })()`); if (rvEnd !== 'over') throw new Error('fin de la partie revue : ' + rvEnd);
  await pj(`document.exitPointerLock?.(), 0`);
  // une map .sspm (version 1, avec sa musique en WAV) fabriquée ici, importée par le bouton : ses notes à leur place, hors de la grille comprises
  const map = await pj(`(async () => { const sr = 22050, n = sr * 6, wav = new Uint8Array(44 + n * 2), dv = new DataView(wav.buffer), w4 = (o, s) => [...s].forEach((c, i) => wav[o + i] = c.charCodeAt(0));
      w4(0, 'RIFF'); dv.setUint32(4, 36 + n * 2, true); w4(8, 'WAVEfmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true); dv.setUint32(24, sr, true); dv.setUint32(28, sr * 2, true); dv.setUint16(32, 2, true); dv.setUint16(34, 16, true); w4(36, 'data'); dv.setUint32(40, n * 2, true);
      const B = [...new TextEncoder().encode('SS+m'), 1, 0, 0, 0, ...new TextEncoder().encode('essai\\nEssai de map\\nTesteur\\n')], w32 = v => B.push(v & 255, v >> 8 & 255, v >> 16 & 255, v >>> 24), f = new DataView(new ArrayBuffer(4)), pts = [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]];
      w32(5000); w32(10); B.push(2, 0, 1); w32(wav.length); w32(0); for (const x of wav) B.push(x);
      for (let i = 0; i < 10; i++) { w32(1000 + i * 400); if (i === 9) { B.push(1); for (const v of [1.5, .5]) { f.setFloat32(0, v, true); B.push(...new Uint8Array(f.buffer)); } } else B.push(0, ...pts[i % 5]); }
      const inp = document.getElementById('thMap'), dt = new DataTransfer(); dt.items.add(new File([new Uint8Array(B)], 'essai.sspm')); inp.files = dt.files; inp.dispatchEvent(new Event('change'));
      for (let i = 0; i < 40; i++) { await new Promise(r => setTimeout(r, 250)); const rh = document.getElementById('rhCanvas').__rh(); if (rh.info?.map && rh.mode === 'ready') break; }
      const rh = document.getElementById('rhCanvas').__rh(); return rh.info?.map ? [rh.notes.length, rh.notes[1].u, rh.notes[9].u.toFixed(3), rh.info.name, document.getElementById('rhSongs').textContent.includes('Testeur')].join('|') : 'pas importée : ' + document.getElementById('rhImpMsg').textContent; })()`);
  if (map !== '10|0.95|0.475|Essai de map|true') throw new Error('map .sspm : ' + map);
  // un défi (coins seulement) et un mod (miroir) : le niveau se refait, les notes ne vont que dans les coins, retournées
  const ch = await pj(`(async () => { const s = document.getElementById('thChal'); s.value = 'coins'; s.dispatchEvent(new Event('change')); await new Promise(r => setTimeout(r, 1500));
      const rh = document.getElementById('rhCanvas').__rh(), ok = rh.notes.every(n => Math.abs(Math.abs(n.u) - .95) < 1e-9 && Math.abs(Math.abs(n.v) - .95) < 1e-9), u1 = rh.notes[1].u, key = rh.info.key;
      [...document.querySelectorAll('#thModRow button')].find(b => /MIROIR/.test(b.textContent)).click(); await new Promise(r => setTimeout(r, 1500));
      const r2 = document.getElementById('rhCanvas').__rh(), mir = r2.notes[1].u === -u1;
      [...document.querySelectorAll('#thModRow button')].find(b => /MIROIR/.test(b.textContent)).click(); s.value = ''; s.dispatchEvent(new Event('change')); await new Promise(r => setTimeout(r, 1200));
      return [ok, key.endsWith('#coins'), mir].join(); })()`);
  if (ch !== 'true,true,true') throw new Error('défi et miroir : ' + ch);
  return 'tunnel ' + end.shape + ', revoir ok' + ', courbe de ' + end.hist + ' notes, plein écran ok, souris capturée ' + pl + ', touche depuis NeoDex ok, ' + Math.round(1000 / avg) + ' i/s en jeu, 95e centile ' + p95.toFixed(1) + ' ms, map .sspm ok, défi et miroir ok, niveau ok';
};
