const cc = require('../rgbconsole');

cc.log('')
cc.title('Colored Text Examples');
cc.log("For colored text use functions with 'text' prefix.");
cc.log("For example, calling textBlue('Some Text') will output:");
cc.textBlue('Some Text')
cc.log('')
cc.log('The functions for colored text are:');
cc.log('    \u2022 textWhite("Some Text")');
cc.log('    \u2022 textRed("Some Text")');
cc.log('    \u2022 textGreen("Some Text")');
cc.log('    \u2022 textYellow("Some Text")');
cc.log('    \u2022 textBlack("Some Text")');
cc.log('    \u2022 textBlue("Some Text")');
cc.log('    \u2022 textCyan("Some Text")');
cc.log('    \u2022 textMagenta("Some Text")');
cc.log('')
cc.log('You can also use shorthand functions:');
cc.log('    \u2022 white("Some Text")');
cc.log('    \u2022 red("Some Text")');
cc.log('    \u2022 green("Some Text")');
cc.log('    \u2022 yellow("Some Text")');
cc.log('    \u2022 black("Some Text")');
cc.log('    \u2022 blue("Some Text")');
cc.log('    \u2022 cyan("Some Text")');
cc.log('    \u2022 magenta("Some Text")');
cc.log('')
cc.log('Preview of the colors:');
cc.textWhite('    \u2022 White')
cc.textRed('    \u2022 Red')
cc.textGreen('    \u2022 Green')
cc.textYellow('    \u2022 Yellow')
cc.textBlack('    \u2022 Black')
cc.textBlue('    \u2022 Blue')
cc.textCyan('    \u2022 Cyan')
cc.textMagenta('    \u2022 Magenta')
cc.log('')
cc.log('')
