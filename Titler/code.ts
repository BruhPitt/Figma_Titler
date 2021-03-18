
figma.showUI(__html__, { width: 200, height: 200 });

figma.ui.onmessage = async (msg) => {

  //loda font
  await figma.loadFontAsync({ family: "Roboto", style: "Regular" })

  //listen to the cmd from html
  if (msg.type === 'create-title') {

    const nodes: SceneNode[] = [];
    //create title
    for (var node of figma.currentPage.selection) {
      const title = figma.createText();
      title.textAlignHorizontal = "LEFT";
      title.textAlignVertical = "CENTER";
      title.characters = node.name;
      title.fontSize = msg.fontSize;
      title.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }]
      node.parent.appendChild(title)
      title.x = node.x;
      title.y = node.y - 10 - title.height;
    }
    console.log(msg.r);
  }
};
