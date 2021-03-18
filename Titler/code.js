var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, { width: 200, height: 200 });

figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function*() {

    yield figma.loadFontAsync({ family: "Roboto", style: "Regular" });
    if (msg.type === 'create-title') {
        const nodes = [];
        for (var node of figma.currentPage.selection) {
            const title = figma.createText();
            title.textAlignHorizontal = "LEFT";
            title.textAlignVertical = "CENTER";
            title.characters = node.name;
            title.fontSize = msg.fontSize;
            title.fills = [{ type: 'SOLID', color: { r: 0.3, g: 0.3, b: 0.3 } }];
            node.parent.appendChild(title);
            title.x = node.x;
            title.y = node.y - 10 - title.height;
        }
        console.log(msg.r);
    }

});