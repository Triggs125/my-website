export const backgroundColors = [
  "#6610f2",
  "#6f42c1",
  "#d63384",
  "#dc3545",
  "#fd7e14",
  "#198754",
  "#0dcaf0",
];

export const hexToRGBA = (hex, opacity = 0.3) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if(c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x' + c.join('');
      return 'rgba(' + [(c>>16)&255, (c>>8)&255, c&255].join(',') + ',' + opacity + ')';
  }
  throw new Error('Bad Hex');
}
