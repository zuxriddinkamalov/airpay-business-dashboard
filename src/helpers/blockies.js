import blockies from 'ethereum-blockies';

export const generateBlockies = address => {
  var icon = blockies.create({
    // All options are optional
    seed: address, // seed used to generate icon data, default: random
    color: VUE_APP_MAIN_COLOR, // to manually specify the icon color, default: random
    bgcolor: '#fff', // choose a different background color, default: random
    size: 6, // width/height of the icon in blocks, default: 8
    scale: 10, // width/height of each block in pixels, default: 4
    spotcolor: '#000' // each pixel has a 13% chance of being of a third color,
    // default: random. Set to -1 to disable it. These "spots" create structures
    // that look like eyes, mouths and noses.
  });
  return icon;
};
