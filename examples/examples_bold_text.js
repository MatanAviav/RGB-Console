const cc = require('../rgbconsole');

cc.log('')
cc.title('Colored Bolded Text Examples');
cc.log("For colored bolded text use functions with 'bold' prefix.");
cc.log("For example, calling boldMagenta('Some Text') will output:");
cc.boldMagenta('Some Text')
cc.log('')
cc.log('The functions for colored bolded text are:');
cc.log('    \u2022 boldWhite("Some Text")');
cc.log('    \u2022 boldRed("Some Text")');
cc.log('    \u2022 boldGreen("Some Text")');
cc.log('    \u2022 boldYellow("Some Text")');
cc.log('    \u2022 boldBlack("Some Text")');
cc.log('    \u2022 boldBlue("Some Text")');
cc.log('    \u2022 boldCyan("Some Text")');
cc.log('    \u2022 boldMagenta("Some Text")');
cc.log('')
cc.log('You can also use the same functions but with the \'color name\' as prefix and \'Bold\' as suffix:');
cc.log('    \u2022 whiteBold("Some Text")');
cc.log('    \u2022 redBold("Some Text")');
cc.log('    \u2022 greenBold("Some Text")');
cc.log('    \u2022 yellowBold("Some Text")');
cc.log('    \u2022 blackBold("Some Text")');
cc.log('    \u2022 blueBold("Some Text")');
cc.log('    \u2022 cyanBold("Some Text")');
cc.log('    \u2022 magentaBold("Some Text")');
cc.log('')
cc.log('You can also use bold(...) function directly with the following parameters:');
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
cc.log('')
cc.log('Preview of the bolded text colors:');
cc.boldWhite('    \u2022 White')
cc.boldRed('    \u2022 Red')
cc.boldGreen('    \u2022 Green')
cc.boldYellow('    \u2022 Yellow')
cc.boldBlack('    \u2022 Black')
cc.boldBlue('    \u2022 Blue')
cc.boldCyan('    \u2022 Cyan')
cc.boldMagenta('    \u2022 Magenta')
cc.log('')
cc.log('')
