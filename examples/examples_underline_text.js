const cc = require('../ColoredConsole');

cc.log('')
cc.title('Colored Underlined Text Examples');
cc.log("For colored underlined text use functions with 'underline' prefix.");
cc.log("For example, calling underlineMagenta('Some Text') will output:");
cc.underlineYellow('Some Text')
cc.log('')
cc.log('All functions for colored underlined text accept the following optional second parameter:');
cc.log('    \u2022 isBold?: boolean - Make the text bolded (Optional). Default: false');
cc.log('')
cc.log('The functions for colored underlined text are:');
cc.log('    \u2022 underlineWhite("Some Text")');
cc.log('    \u2022 underlineRed("Some Text")');
cc.log('    \u2022 underlineGreen("Some Text")');
cc.log('    \u2022 underlineYellow("Some Text")');
cc.log('    \u2022 underlineBlack("Some Text")');
cc.log('    \u2022 underlineBlue("Some Text")');
cc.log('    \u2022 underlineCyan("Some Text")');
cc.log('    \u2022 underlineMagenta("Some Text")');
cc.log('')
cc.log('You can also use the same functions but with the \'color name\' as prefix and \'Underline\' as suffix:');
cc.log('    \u2022 whiteUnderline("Some Text")');
cc.log('    \u2022 redUnderline("Some Text")');
cc.log('    \u2022 greenUnderline("Some Text")');
cc.log('    \u2022 yellowUnderline("Some Text")');
cc.log('    \u2022 blackUnderline("Some Text")');
cc.log('    \u2022 blueUnderline("Some Text")');
cc.log('    \u2022 cyanUnderline("Some Text")');
cc.log('    \u2022 magentaUnderline("Some Text")');
cc.log('')
cc.log('You can also use underline(...) function directly with the following parameters:');
cc.log('    \u2022 text: string - A Text');
cc.log('    \u2022 text_color: string - A Text Color from ColoredConsole.TEXT_COLORS object:');
cc.log('        \u2022 BLACK');
cc.log('        \u2022 BLUE');
cc.log('        \u2022 CYAN');
cc.log('        \u2022 GREEN');
cc.log('        \u2022 MAGENTA');
cc.log('        \u2022 RED');
cc.log('        \u2022 WHITE');
cc.log('        \u2022 YELLOW');
cc.log('    \u2022 isBold?: boolean - Make the text bolded (Optional). Default: false');
cc.log('')
cc.log('Preview of the underlined text colors:');
cc.underlineWhite('    \u2022 White')
cc.underlineRed('    \u2022 Red')
cc.underlineGreen('    \u2022 Green')
cc.underlineYellow('    \u2022 Yellow')
cc.underlineBlack('    \u2022 Black')
cc.underlineBlue('    \u2022 Blue')
cc.underlineCyan('    \u2022 Cyan')
cc.underlineMagenta('    \u2022 Magenta')
cc.log('')
cc.log('')
