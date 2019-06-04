/*
 Multi-Line Text Support
 -----------------------
*/
export default function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var lines = text.split("\n");

    for (var ii = 0; ii < lines.length; ii++) {

        var line = "";
        var words = lines[ii].split(" ");

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth) {
                context.fillText(line, x, y);
                line = words[n] + " ";
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }

        context.fillText(line, x, y);
        y += lineHeight;
    }
 }
