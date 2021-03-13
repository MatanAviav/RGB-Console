const cc = require('../ColoredConsole');

cc.log('')
cc.title('Error/Negative Messages Examples');
cc.log("For Error/Negative messages use error(...), bad(...) or fail(...) functions.");
cc.log("For example, calling error('Some Text') will output:");
cc.error('Some Text')
cc.log('')
cc.BGMagenta('By default, error(...) function will output a message which has:');
cc.log('    \u2022 A Red Background Color');
cc.log('    \u2022 A \u2715 symbol at the beginning');
cc.log('    \u2022 The word \'ERROR\' as prefix');
cc.log('')
cc.log('Note that error(...) function does accept the following parameters:');
cc.log('    \u2022 text: string - A Text');
cc.log('    \u2022 options?: object (Optional) - An object with the following properties:');
cc.log('        \u2022 removeSymbol?: boolean - Remove the \u2715 symbol from the beginning (Optional)');
cc.log('        \u2022 newPrefix?: string - A new prefix at the beginning (Optional)');
cc.log('')
cc.BGMagenta('Examples');
cc.log('1. Calling error("Some Text", {removeSymbol: true}) will output:');
cc.error("Some Text", {removeSymbol: true});
cc.log('')
cc.log('2. Calling error("Some Text", {removeSymbol: true, newPrefix: "CustomPrefix"}) will output:');
cc.error("Some Text", {removeSymbol: true, newPrefix: 'CustomPrefix'});
cc.log('')
cc.log('3. Calling error("Some Text", {removeSymbol: true, newPrefix: ""}) will output:');
cc.error("Some Text", {removeSymbol: true, newPrefix: ''});
cc.log('')
cc.log('4. Calling error("Some Text") will output:');
cc.error("Some Text");
cc.log('')
cc.BGMagenta('The bad(...) and fail(...) Functions');
cc.log('The bad(...) and fail(...) functions are the same as error(...) function but with one difference:');
cc.log('    \u2022 By default, bad(...) function has the word \'BAD\' as prefix');
cc.log('    \u2022 By default, fail(...) function has the word \'FAIL\' as prefix');
cc.log('')
cc.log('')
