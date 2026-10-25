import * as THREE from 'three';
import {loadImage,loadFonts,disposeObject} from '../runtime/resources.js';
import {fonts} from './fonts.js';
export const editions=[{"id":"nightreign","title":"Nightreign"},{"id":"erdtree","title":"Shadow of the Erdtree"},{"id":"ac6","title":"Armored Core VI"},{"id":"elden-ring","title":"Elden Ring"},{"id":"sekiro","title":"Sekiro"},{"id":"ds3","title":"Dark Souls III"},{"id":"bloodborne","title":"Bloodborne"},{"id":"ds2","title":"Dark Souls II"},{"id":"dark-souls","title":"Dark Souls"},{"id":"demons-souls","title":"Demon's Souls"}];
const BOOKS=[{"id":"nightreign","title":"Nightreign","t1":"ELDEN RING","t2":"NIGHTREIGN","sub":"FIELD NOTES FROM LIMVELD","year":"2025","vol":"I","shelf":0,"slot":0,"spine":"#2f4a6b","cloth":"#12161d","edge":"#e4dcc6","blurb":"Three nights, one shrinking ring. Expedition plates, nightlord studies and the sky that closes in."},{"id":"erdtree","title":"Shadow of the Erdtree","t1":"SHADOW OF THE","t2":"ERDTREE","sub":"THE ART OF THE REALM OF SHADOW","year":"2024","vol":"II","shelf":0,"slot":1,"spine":"#7a6a2e","cloth":"#171510","edge":"#e9dfc4","blurb":"A land held under a second tree. Shadow-keep architecture, the finger ruins, and the long gold dark."},{"id":"ac6","title":"Armored Core VI","t1":"ARMORED CORE VI","t2":"FIRES OF RUBICON","sub":"MECHANICAL DESIGN WORKS","year":"2023","vol":"III","shelf":0,"slot":2,"spine":"#b4531f","cloth":"#171310","edge":"#eae3d2","blurb":"Frames, boosters and cannon mounts, drawn as engineering. Every part in the assembly, plated and numbered."},{"id":"elden-ring","title":"Elden Ring","t1":"ELDEN RING","t2":"","sub":"THE ART OF THE LANDS BETWEEN","year":"2022","vol":"IV","shelf":0,"slot":3,"spine":"#c39a3f","cloth":"#15120e","edge":"#e8dfc8","blurb":"Six hundred plates from the Lands Between. Erdtree studies, armour sheets, and the bestiary in full."},{"id":"sekiro","title":"Sekiro","t1":"SEKIRO","t2":"","sub":"SHADOWS DIE TWICE · OFFICIAL ARTWORKS","year":"2019","vol":"V","shelf":0,"slot":4,"spine":"#a8291f","cloth":"#141312","edge":"#e9e1cd","blurb":"The Sengoku sketchbook: prosthetic schematics, temple interiors, and every boss in ink."},{"id":"ds3","title":"Dark Souls III","t1":"DARK SOULS III","t2":"","sub":"DESIGN WORKS","year":"2016","vol":"VI","shelf":1,"slot":0,"spine":"#6a5a4a","cloth":"#161513","edge":"#e2d8c0","blurb":"The last of the fires. Lothric in graphite and ash, and the long walk down to the kiln."},{"id":"bloodborne","title":"Bloodborne","t1":"BLOODBORNE","t2":"","sub":"OFFICIAL ARTWORKS","year":"2015","vol":"VII","shelf":1,"slot":1,"spine":"#7d1a1c","cloth":"#0f0c0d","edge":"#e4d9c4","blurb":"Yharnam by lamplight — trick weapons, church attire, and everything that woke up in the night."},{"id":"ds2","title":"Dark Souls II","t1":"DARK SOULS II","t2":"","sub":"DESIGN WORKS","year":"2014","vol":"VIII","shelf":1,"slot":2,"spine":"#4f5f5a","cloth":"#121614","edge":"#ddd8c6","blurb":"Drangleic, drawn cold. Causeways, cliff gates, and a grey sky that never quite breaks."},{"id":"dark-souls","title":"Dark Souls","t1":"DARK SOULS","t2":"","sub":"DESIGN WORKS","year":"2011","vol":"IX","shelf":1,"slot":3,"spine":"#8a7a5e","cloth":"#1a1815","edge":"#ded3ba","blurb":"The first of the ash books. Lordran in graphite, and the bonfire that started all of this."},{"id":"demons-souls","title":"Demon's Souls","t1":"DEMON'S SOULS","t2":"","sub":"DESIGN WORKS","year":"2009","vol":"X","shelf":1,"slot":4,"spine":"#41586c","cloth":"#101418","edge":"#dcdcd4","blurb":"Boletaria in fog. The Nexus archways, the archstones, and a colour palette of two greys."}];
const PLATE_SRC={"nightreign":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/b9856cdba111a3947a3ab349e6d9bf1192000a3e5c574ede1eac7e57a54a7960.webp","erdtree":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/cea3ddd8878b8f98dd57b179e7643b1114de7cef6507aa426e1e22470e7f6303.webp","ac6":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/a184e2ef47f01f5b43624ca164e33074280bf3c63cc0e7e9fe40e3cf7206a2ec.webp","elden-ring":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/6e7ca2b81419181bc04e65239912f93460a885f1db4702b6b50a9aecb542fa51.webp","sekiro":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/eb64ecbe1764600c7e2be8a313b1b5df94c5c3cf40364a8c1a4c1396593865ae.webp","ds3":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/0a8598dcca86bab3315c7334be6b8df4b736c8bdc87b07619d96dfeb66cb110e.webp","bloodborne":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/e7aa7c9dc017cd79747e7b9737431d779e62b9a803cb096898ac05f1befba9f1.webp","ds2":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/47b837a2b28f88aa24d30438538e9748b94b204abdc15f1c46d8268ef3769a96.webp","dark-souls":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/9595f12a99f2021856ffd5b2f358ece9fb7c0fd8c1f525d805f2a31e56293ecf.webp","demons-souls":"https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/embedded/7a7731c5736df687b81fa8e44a0a6163c648b38fe3d1851fbacf384340d7a954.webp"};
export async function createBook(renderer,{edition='nightreign'}={}){
const PLATE={};
const K = {
  bookW: 0.887, bookH: 1.33, bookD: 0.17,    // 2:3, the format the plates are shot at
  lean: -0.20, yaw: 0.155,
  bow: 0.0080, chamf: 0.0135, chamfR: 0.022,
  shelfTop: [0.251, -1.241],
  plankHalf: 3.34, plankThick: 0.105, plankDepth: 0.80,
  wallZ: -1.43, bookZ: -1.18,
  slot: 1.235,
  activeDuration: 700, hoverDrop: 400, hoverLift: 1000,
  introStagger: 78, introWallFade: 1000, introFade: 460,
  fov: 20,
  boxX: 5.86, boxY: 3.36, boxCY: 0.06, offset: 1.25, maxWidthPx: 1550,
  orbitAz: 0.085, orbitEl: 0.052,
  activeX: 0.72, activeRot: [0.075, 0.285, 0.0],
  mTilt: -Math.PI/7, mFlat: -0.06,
  mStepZ: 0.15, mStepY: 0.17, mY: 0.30, mZ0: 0.75,
  mFill: 0.62, mDrop: 0.22,
};

const STUDIO = 'FromSoftware';

const TAU = Math.PI*2;

const SANS  = 'Inter,-apple-system,"Helvetica Neue",Helvetica,Arial,sans-serif';

const SERIF = '"EB Garamond",Didot,"Bodoni 72",Georgia,"Times New Roman",serif';

const MONO  = 'ui-monospace,"SF Mono",Menlo,Monaco,Consolas,monospace';

function mulberry(seed){let a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}

function C(w,h){const c=document.createElement('canvas');c.width=w;c.height=h===undefined?w:h;return c;}

function lg(g,x0,y0,x1,y1,stops){const t=g.createLinearGradient(x0,y0,x1,y1);for(const s of stops)t.addColorStop(s[0],s[1]);return t;}

function rg(g,x,y,r0,r1,stops,x1,y1){const t=g.createRadialGradient(x,y,r0,x1===undefined?x:x1,y1===undefined?y:y1,r1);for(const s of stops)t.addColorStop(s[0],s[1]);return t;}

function tracked(g,text,x,y,track,align){
  let w=0;for(const ch of text)w+=g.measureText(ch).width+track;w-=track;
  let cx = align==='center'? x-w/2 : align==='right'? x-w : x;
  const prev=g.textAlign;g.textAlign='left';
  for(const ch of text){g.fillText(ch,cx,y);cx+=g.measureText(ch).width+track;}
  g.textAlign=prev;return w;
}

function fitTracked(g,text,w,weight,family,track){
  let lo=4,hi=3000;
  const meas=px=>{g.font=`${weight} ${px}px ${family}`;let t=0;for(const ch of text)t+=g.measureText(ch).width+track*px;return t-track*px;};
  for(let i=0;i<26;i++){const m=(lo+hi)/2;if(meas(m)>w)hi=m;else lo=m;}
  g.font=`${weight} ${lo}px ${family}`;return lo;
}

function grain(g,W,H,amount,seed){
  const r=mulberry(seed||7);const img=g.getImageData(0,0,W,H),d=img.data;
  for(let i=0;i<d.length;i+=4){const n=(r()-0.5)*amount;d[i]+=n;d[i+1]+=n;d[i+2]+=n;}
  g.putImageData(img,0,0);
}

function rule(g,x0,y0,x1,y1,col,w){g.strokeStyle=col;g.lineWidth=w;g.beginPath();g.moveTo(x0,y0);g.lineTo(x1,y1);g.stroke();}

const FOIL = '#efe4cc';

function paintCover(b,W,H){
  const c=C(W,H),g=c.getContext('2d');
  const img=PLATE[b.id];
  if(img){                                        // cover-fit the generated plate
    const k=Math.max(W/img.naturalWidth,H/img.naturalHeight);
    const dw=img.naturalWidth*k, dh=img.naturalHeight*k;
    g.drawImage(img,(W-dw)/2,(H-dh)/2,dw,dh);
  } else {
    g.fillStyle=b.cloth;g.fillRect(0,0,W,H);
    g.fillStyle=rg(g,W*.5,H*.62,W*.02,W*.9,[[0,b.spine],[1,'rgba(0,0,0,0)']]);g.fillRect(0,0,W,H);
  }
  // house scrims — the type reads on every plate without hiding the picture
  g.fillStyle=lg(g,0,0,0,H*.44,[[0,'rgba(9,8,7,.76)'],[.42,'rgba(9,8,7,.36)'],[1,'rgba(9,8,7,0)']]);
  g.fillRect(0,0,W,H*.44);
  g.fillStyle=lg(g,0,H*.70,0,H,[[0,'rgba(9,8,7,0)'],[.55,'rgba(9,8,7,.34)'],[1,'rgba(9,8,7,.72)']]);
  g.fillRect(0,H*.70,W,H*.30);
  // hairline foil frame
  g.strokeStyle='rgba(239,228,204,.34)';g.lineWidth=W*.0032;
  g.strokeRect(W*.052,H*.038,W*.896,H*.924);
  // title block
  g.textAlign='center';g.textBaseline='alphabetic';
  const fam='"EB Garamond",Georgia,serif';
  let y;
  if(b.t2){
    const s1=fitTracked(g,b.t1,W*.70,'500',fam,0.085);
    g.fillStyle=FOIL;tracked(g,b.t1,W*.5,H*.128,s1*0.085,'center');
    const s2=fitTracked(g,b.t2,W*.80,'500',fam,0.075);
    g.fillStyle=FOIL;tracked(g,b.t2,W*.5,H*.128+s2*1.02,s2*0.075,'center');
    y=H*.128+s2*1.02;
  } else {
    const s1=fitTracked(g,b.t1,W*.82,'500',fam,0.075);
    g.fillStyle=FOIL;tracked(g,b.t1,W*.5,H*.163,s1*0.075,'center');
    y=H*.163;
  }
  rule(g,W*.30,y+H*.030,W*.70,y+H*.030,'rgba(239,228,204,.5)',W*.0026);
  g.font=`400 ${W*.0215}px ${SANS}`;g.fillStyle='rgba(240,231,212,.86)';
  tracked(g,b.sub,W*.5,y+H*.064,W*.0215*.20,'center');
  // foot
  g.globalAlpha=.72;g.fillStyle=FOIL;
  g.font=`400 ${W*.0195}px ${SANS}`;
  tracked(g,'VOLUME '+b.vol,W*.5,H*.884,W*.0195*.34,'center');
  g.globalAlpha=.92;
  g.font=`500 ${W*.0215}px ${SANS}`;
  tracked(g,'ASHEN PRESS',W*.5,H*.920,W*.0215*.34,'center');
  g.globalAlpha=1;
  grain(g,W,H,6,b.id.length*37+5);
  return c;
}

function isLight(hex){
  const n=parseInt(hex.slice(1),16);
  return (((n>>16&255)*.299+(n>>8&255)*.587+(n&255)*.114))>150;
}

function artBack(b,W,H){
  const c=C(W,H),g=c.getContext('2d'),r=mulberry(b.id.length*911+7);
  const light=isLight(b.cloth);
  const ink = light? '#26221c' : '#efe8da';
  g.fillStyle=b.cloth;g.fillRect(0,0,W,H);
  g.fillStyle=rg(g,W*.5,H*.34,W*.05,W*.95,
    [[0,light?'rgba(255,255,255,.55)':'rgba(255,255,255,.10)'],[1,'rgba(0,0,0,0)']]);
  g.fillRect(0,0,W,H);
  // three plates lifted straight out of the volume
  const img=PLATE[b.id];
  const crops=[[0.06,0.05,0.44],[0.30,0.36,0.42],[0.54,0.66,0.40]];
  for(let i=0;i<3;i++){
    const x=W*(.10+i*.28), y=H*.115, w=W*.24, h=w*1.14;
    g.save();
    g.fillStyle=light?'#ddd5c4':'#2a2621';g.fillRect(x,y,w,h);
    if(img){
      const cw=img.naturalWidth*crops[i][2], ch=cw*(h/w);
      const sx=Math.min(img.naturalWidth-cw, img.naturalWidth*crops[i][0]);
      const sy=Math.min(img.naturalHeight-ch, img.naturalHeight*crops[i][1]);
      g.drawImage(img,sx,sy,cw,ch,x,y,w,h);
    } else {
      g.fillStyle=lg(g,x,y,x+w,y+h,[[0,b.spine],[1,'#231f1b']]);g.fillRect(x,y,w,h);
    }
    g.globalAlpha=.28;g.fillStyle=b.cloth;g.fillRect(x,y,w,h);g.globalAlpha=1;
    g.strokeStyle=light?'rgba(40,34,28,.35)':'rgba(240,232,218,.28)';g.lineWidth=W*.0025;
    g.strokeRect(x,y,w,h);
    g.restore();
  }
  g.fillStyle=ink;g.globalAlpha=.55;g.font=`400 ${W*.017}px ${MONO}`;g.textAlign='left';
  g.fillText('PLATES '+(21+22*b.title.length)+'–'+(180+31*b.title.length),W*.10,H*.415);
  g.globalAlpha=1;
  // blurb
  g.font=`400 ${W*.030}px ${SERIF}`;g.fillStyle=ink;
  const words=b.blurb.split(' ');let line='',y=H*.505;
  for(const w0 of words){
    const t=line?line+' '+w0:w0;
    if(g.measureText(t).width>W*.80){g.fillText(line,W*.10,y);line=w0;y+=W*.042;}
    else line=t;
  }
  g.fillText(line,W*.10,y);
  g.globalAlpha=.7;g.font=`400 ${W*.020}px ${SANS}`;
  tracked(g,`${STUDIO.toUpperCase()} · ${b.year}`,W*.10,y+W*.075,W*.020*.18,'left');
  g.globalAlpha=1;
  // imprint roundel
  g.save();g.translate(W*.13,H*.855);
  g.strokeStyle=ink;g.globalAlpha=.55;g.lineWidth=W*.0035;
  g.beginPath();g.arc(0,0,W*.058,0,TAU);g.stroke();
  g.globalAlpha=1;g.fillStyle=ink;
  g.font=`500 ${W*.030}px ${SERIF}`;g.textAlign='center';g.textBaseline='middle';
  g.fillText('AP',0,W*.002);g.restore();
  g.textAlign='left';g.textBaseline='alphabetic';
  g.fillStyle=ink;g.font=`500 ${W*.022}px ${SANS}`;
  tracked(g,'ASHEN PRESS',W*.215,H*.845,W*.022*.30,'left');
  g.globalAlpha=.6;g.font=`400 ${W*.020}px ${SANS}`;
  g.fillText('Volume '+b.vol+' of the Worlds series',W*.215,H*.875);
  g.globalAlpha=1;
  // barcode
  const bx=W*.60,by=H*.815,bw=W*.30,bh=H*.085;
  g.fillStyle=light?'#ffffff':'#f2ece0';g.fillRect(bx,by,bw,bh);
  g.fillStyle='#15120f';
  let px=bx+bw*.04;
  while(px<bx+bw*.96){const w=W*(.002+ (r()<.3?.006:.002)*r()*3);g.fillRect(px,by+bh*.10,w,bh*.66);px+=w+W*(.002+r()*.004);}
  g.font=`400 ${W*.017}px ${MONO}`;g.textAlign='center';
  g.fillText('9 78'+(1000000+((r()*8999999)|0)),bx+bw/2,by+bh*.93);
  g.textAlign='right';g.fillStyle=ink;g.globalAlpha=.75;g.font=`400 ${W*.020}px ${SANS}`;
  g.fillText('£68.00',W*.90,H*.775);g.globalAlpha=1;
  grain(g,W,H,8,5);
  return c;
}

function artSpine(b,W,H){
  const c=C(W,H),g=c.getContext('2d');
  const light=isLight(b.spine);
  const ink=light?'#26221c':'#f3ece0';
  g.fillStyle=b.spine;g.fillRect(0,0,W,H);
  g.strokeStyle=ink;g.globalAlpha=.5;g.lineWidth=W*.035;
  g.beginPath();g.moveTo(W*.22,H*.052);g.lineTo(W*.78,H*.052);g.stroke();
  g.beginPath();g.moveTo(W*.22,H*.912);g.lineTo(W*.78,H*.912);g.stroke();
  g.globalAlpha=1;
  g.save();g.translate(W*.52,H*.10);g.rotate(Math.PI/2);
  g.fillStyle=ink;g.textAlign='left';g.textBaseline='middle';
  const t=b.title.toUpperCase();
  const ts=fitTracked(g,t,H*.56,'500','"EB Garamond",Georgia,serif',0.07);
  tracked(g,t,0,0,ts*0.07,'left');
  g.globalAlpha=.72;g.font=`400 ${W*.20}px ${SANS}`;
  tracked(g,STUDIO.toUpperCase(),H*.60,0,W*.20*.2,'left');
  g.restore();
  g.globalAlpha=1;g.fillStyle=ink;
  g.textAlign='center';g.textBaseline='middle';
  g.font=`500 ${W*.30}px ${SERIF}`;
  g.fillText('AP',W*.52,H*.955);
  g.font=`400 ${W*.20}px ${SANS}`;g.globalAlpha=.75;
  g.fillText(b.vol,W*.52,H*.032);
  return c;
}

const BOARD_FN = `
  // height field of a bound board: a shallow bulge that falls into a crisp chamfer
  float board(vec2 t){
    vec2 c=t*2.0-1.0;
    float bulge=(1.0-c.x*c.x)*(1.0-0.55*c.y*c.y);
    float e=clamp(min(min(t.x,1.0-t.x),min(t.y,1.0-t.y))/uER,0.0,1.0);
    float roll=sqrt(max(1.0-(1.0-e)*(1.0-e),0.0));   // quarter round, sharp at the lip
    return uBow*bulge*roll-uChamf*(1.0-roll);
  }`;

const COVER_VS = `
  uniform float uBow, uChamf, uER, uW, uH;
  varying vec2 vUv; varying vec3 vT, vB2, vNf; varying vec3 vWV;
  ${BOARD_FN}
  void main(){
    vUv=uv;
    vec3 pos=position; pos.z+=board(uv);
    mat3 M=mat3(modelMatrix);
    vT=normalize(M*vec3(1.0,0.0,0.0));
    vB2=normalize(M*vec3(0.0,1.0,0.0));
    vNf=normalize(M*vec3(0.0,0.0,1.0));
    vec4 wp=modelMatrix*vec4(pos,1.0);
    vWV=cameraPosition-wp.xyz;
    gl_Position=projectionMatrix*viewMatrix*wp; }`;

const COVER_FS = `
  uniform sampler2D uTex; uniform float uSatin; uniform float uOpacity; uniform float uSeed;
  uniform float uBow, uChamf, uER, uW, uH;
  varying vec2 vUv; varying vec3 vT, vB2, vNf; varying vec3 vWV;
  ${BOARD_FN}
  float hash(vec2 p){ vec3 p3=fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973));
    p3+=dot(p3,p3.yxz+33.33); return fract((p3.x+p3.y)*p3.z); }
  float vnoise(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
  void main(){
    vec2 uv=clamp(vUv,0.0008,0.9992);
    vec4 tex=texture2D(uTex,uv);

    // the board normal is evaluated per pixel, so the chamfer stays crisp
    // however coarse the mesh is
    float d=0.0016;
    float hx=(board(uv+vec2(d,0.0))-board(uv-vec2(d,0.0)))/(2.0*d*uW);
    float hy=(board(uv+vec2(0.0,d))-board(uv-vec2(0.0,d)))/(2.0*d*uH);

    // linen tooth, as a small extra slope
    vec2 q=uv*vec2(58.0,78.0)+uSeed;
    float tooth=vnoise(q)*0.6+vnoise(q*2.7)*0.4;
    vec2 g2=uv*9.0+uSeed;
    float n1=vnoise(g2), e=0.02;
    vec2 grain=vec2(vnoise(g2+vec2(e,0.0))-n1, vnoise(g2+vec2(0.0,e))-n1)/e;

    vec3 N=normalize(vNf
      - vT*(hx + (grain.x*0.0022+(tooth-0.5)*0.009)*uSatin)
      - vB2*(hy + (grain.y*0.0022+(tooth-0.5)*0.009)*uSatin));
    vec3 V=normalize(vWV);

    // one key from above and to the right, a broad fill bounced off the paper wall
    vec3 L=normalize(vec3(0.52,0.70,0.55));
    vec3 F=normalize(vec3(-0.35,-0.18,0.92));
    float key=max(dot(N,L),0.0);
    float fill=max(dot(N,F),0.0);
    float shade=0.70+0.34*key+0.14*fill;
    vec3 col=tex.rgb*shade;

    // a tight specular that only fires on the chamfer, plus a broad satin lobe
    vec3 Hv=normalize(L+V);
    float nh=max(dot(N,Hv),0.0);
    col+=vec3(pow(nh,110.0)*0.85*uSatin);
    col+=vec3(pow(nh,14.0)*0.045*uSatin);
    float fres=pow(1.0-max(dot(N,V),0.0),3.4);
    col+=vec3(fres*0.055*uSatin);
    col+=vec3((tooth-0.5)*0.010*uSatin);

    gl_FragColor=vec4(min(col,vec3(1.0)),uOpacity);
    #include <colorspace_fragment>
  }`;

const SPINE_VS = `
  uniform float uHD;
  varying vec2 vUv; varying vec3 vNw, vTw, vBw, vWV; varying float vZ;
  void main(){
    vUv=uv;
    mat3 M=mat3(modelMatrix);
    vNw=normalize(M*normal);
    vTw=normalize(M*vec3(0.0,0.0,1.0));   // across the back
    vBw=normalize(M*vec3(0.0,1.0,0.0));   // head to tail
    vZ=position.z/uHD;
    vec4 wp=modelMatrix*vec4(position,1.0);
    vWV=cameraPosition-wp.xyz;
    gl_Position=projectionMatrix*viewMatrix*wp; }`;

const SPINE_FS = `
  uniform sampler2D uTex; uniform float uOpacity; uniform float uSeed; uniform float uSatin;
  varying vec2 vUv; varying vec3 vNw, vTw, vBw, vWV; varying float vZ;
  float hash(vec2 p){ vec3 p3=fract(vec3(p.xyx)*vec3(0.1031,0.1030,0.0973));
    p3+=dot(p3,p3.yxz+33.33); return fract((p3.x+p3.y)*p3.z); }
  float vnoise(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.0-2.0*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y); }
  void main(){
    vec4 tex=texture2D(uTex,clamp(vUv,0.0015,0.9985));
    float t=clamp(vZ,-1.0,1.0);
    // a hollow back: nearly flat down the middle, turning hard into the joints.
    // swept as an angle rather than a slope so the normal can reach the joints
    float ang=1.15*sign(t)*pow(abs(t),1.25);

    vec2 q=vUv*vec2(11.0,78.0)+uSeed;
    float tooth=vnoise(q)*0.6+vnoise(q*2.7)*0.4;
    vec3 N=normalize(vNw*cos(ang) + vTw*sin(ang)
                     + (vTw*0.009+vBw*0.009)*(tooth-0.5)*uSatin);
    vec3 V=normalize(vWV);

    vec3 L=normalize(vec3(0.52,0.70,0.55));
    vec3 F=normalize(vec3(-0.35,-0.18,0.92));
    float shade=0.70+0.34*max(dot(N,L),0.0)+0.14*max(dot(N,F),0.0);
    shade*=1.0-0.16*smoothstep(0.78,1.0,abs(t));      // the joint grooves
    vec3 col=tex.rgb*shade;

    // the key sits off to the right, so on the back it only ever grazes the
    // front joint — the bounce off the paper wall is what rakes the round
    vec3 Hv=normalize(L+V), Hf=normalize(F+V);
    float nh=max(dot(N,Hv),0.0), nf=max(dot(N,Hf),0.0);
    col+=vec3(pow(nh,110.0)*0.55*uSatin);
    col+=vec3(pow(nh,14.0)*0.045*uSatin);
    col+=vec3(pow(nf,46.0)*0.150*uSatin);
    col+=vec3(pow(nf,9.0)*0.032*uSatin);
    col+=vec3(pow(1.0-max(dot(N,V),0.0),3.4)*0.055*uSatin);
    col+=vec3((tooth-0.5)*0.010*uSatin);

    gl_FragColor=vec4(min(col,vec3(1.0)),uOpacity);
    #include <colorspace_fragment>
  }`;

function spineMaterial(tex,seed){
  return new THREE.ShaderMaterial({transparent:true,
    uniforms:{uTex:{value:tex},uOpacity:{value:0},uSeed:{value:seed},
              uSatin:{value:1.0},uHD:{value:K.bookD*0.5}},
    vertexShader:SPINE_VS,fragmentShader:SPINE_FS});
}

function pagesMaterial(col){
  return new THREE.ShaderMaterial({
    transparent:true,
    uniforms:{uCol:{value:new THREE.Color(col)},uOpacity:{value:0},uH:{value:K.bookH*0.5}},
    vertexShader:`
      varying vec3 vP; varying vec3 vNw; varying vec3 vWV;
      void main(){ vP=position; vNw=normalize(mat3(modelMatrix)*normal);
        vec4 wp=modelMatrix*vec4(position,1.0);
        vWV=cameraPosition-wp.xyz;
        gl_Position=projectionMatrix*viewMatrix*wp; }`,
    fragmentShader:`
      uniform vec3 uCol; uniform float uOpacity; uniform float uH;
      varying vec3 vP; varying vec3 vNw; varying vec3 vWV;
      void main(){
        float f=vP.z*210.0;
        float w=fwidth(f);
        float line=0.5+0.5*cos(f*6.2831853);
        line=mix(0.5,line,clamp(1.0-w*1.6,0.0,1.0));
        vec3 col=uCol*0.88*mix(0.76,1.04,line);
        col*=1.0-0.16*smoothstep(0.25,1.0,abs(vP.y)/uH);
        col*=0.90+0.10*smoothstep(-0.09,0.09,vP.z);

        // the same rig as the boards, so the block turns with the volume
        vec3 N=normalize(vNw), V=normalize(vWV);
        vec3 L=normalize(vec3(0.52,0.70,0.55));
        vec3 F=normalize(vec3(-0.35,-0.18,0.92));
        float shade=0.70+0.34*max(dot(N,L),0.0)+0.14*max(dot(N,F),0.0);
        shade*=1.0-0.36*max(-N.y,0.0);      // the tail sits in its own shadow
        col*=shade/0.871;                   // 0.871 holds the fore-edge at its old tone
        // paper carries no real specular, only a graze
        col+=uCol*pow(1.0-max(dot(N,V),0.0),3.2)*max(dot(N,L),0.0)*0.11;
        gl_FragColor=vec4(min(col,vec3(1.0)),uOpacity);
        #include <colorspace_fragment>
      }`});
}

const SZW=K.bookW;

const SZH=K.bookH;

const SZD=K.bookD;

const bodyGeo=new THREE.BoxGeometry(SZW,SZH,SZD);

const faceGeo=new THREE.PlaneGeometry(SZW,SZH,44,44);
 await loadFonts(fonts);const index=Math.max(0,BOOKS.findIndex(b=>b.id===edition)),data=BOOKS[index];PLATE[data.id]=await loadImage(PLATE_SRC[data.id]);
 const root=new THREE.Group();const texture=cv=>{const t=new THREE.CanvasTexture(cv);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;return t;};
 const coverTex=texture(paintCover(data,768,1152)),spineTex=texture(artSpine(data,142,1152));
 const pages=pagesMaterial(data.edge),spine=spineMaterial(spineTex,index*5.7);pages.uniforms.uOpacity.value=spine.uniforms.uOpacity.value=1;
 const cloth=new THREE.MeshBasicMaterial({color:data.cloth});root.add(new THREE.Mesh(bodyGeo,[pages,spine,pages,pages,cloth,cloth]));
 const mk=(tex,satin,seed)=>new THREE.ShaderMaterial({uniforms:{uTex:{value:tex},uSatin:{value:satin},uOpacity:{value:1},uSeed:{value:seed},uBow:{value:K.bow},uChamf:{value:K.chamf},uER:{value:K.chamfR},uW:{value:SZW},uH:{value:SZH}},vertexShader:COVER_VS,fragmentShader:COVER_FS});
 const cover=new THREE.Mesh(faceGeo,mk(coverTex,1,index*7.3));cover.position.z=SZD/2+K.chamf+.0008;root.add(cover);
 const back=new THREE.Mesh(faceGeo,mk(texture(artBack(data,768,1152)),.55,index*3.1+11));back.position.z=-SZD/2-K.chamf-.0008;back.rotation.y=Math.PI;root.add(back);
 return {root,edition:data.id,title:data.title,openable:false,height:SZH,width:SZW,depth:SZD,dispose(){disposeObject(root);}};
}
