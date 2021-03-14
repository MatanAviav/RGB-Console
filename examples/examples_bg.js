const cc = require('../rgbconsole');

cc.log('')
cc.title('Colored Background Examples');
cc.log("For colored background use functions with 'BG' prefix.");
cc.log("For example, calling BGRed('Some Text') will output:");
cc.BGRed('Some Text')
cc.log('')
cc.log('The functions for colored background are:');
cc.log('    \u2022 BGWhite("Some Text")');
cc.log('    \u2022 BGBlue("Some Text")');
cc.log('    \u2022 BGRed("Some Text")');
cc.log('    \u2022 BGGreen("Some Text")');
cc.log('    \u2022 BGYellow("Some Text")');
cc.log('    \u2022 BGCyan("Some Text")');
cc.log('    \u2022 BGMagenta("Some Text")');
cc.log('')
cc.log('You can also use the same functions but with the \'color name\' as prefix and \'BG\' as suffix:');
cc.log('    \u2022 whiteBG("Some Text")');
cc.log('    \u2022 blueBG("Some Text")');
cc.log('    \u2022 redBG("Some Text")');
cc.log('    \u2022 greenBG("Some Text")');
cc.log('    \u2022 yellowBG("Some Text")');
cc.log('    \u2022 cyanBG("Some Text")');
cc.log('    \u2022 magentaBG("Some Text")');
cc.log('')
cc.log('You can also use bg(...) function directly with the following parameters:');
cc.log('    \u2022 text: string - A Text');
cc.log('    \u2022 bg_color: string - A Background Color from ColoredConsole.BG_COLORS object:');
cc.log('        \u2022 WHITE');
cc.log('        \u2022 BLUE');
cc.log('        \u2022 RED');
cc.log('        \u2022 GREEN');
cc.log('        \u2022 YELLOW');
cc.log('        \u2022 CYAN');
cc.log('        \u2022 MAGENTA');
cc.log('    \u2022 text_color: string - A text color from ColoredConsole.TEXT_COLORS object (Optional). Default text color: BLACK');
cc.log('')
cc.log('Preview of the colors:');
cc.whiteBG('    \u2022 White  ')
cc.blueBG('    \u2022 Blue  ')
cc.redBG('    \u2022 Red  ')
cc.greenBG('    \u2022 Green  ')
cc.yellowBG('    \u2022 Yellow  ')
cc.cyanBG('    \u2022 Cyan  ')
cc.magentaBG('    \u2022 Magenta  ')
cc.log('')
cc.log('')
