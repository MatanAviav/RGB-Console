const cc = require('../rgbconsole');

cc.log('')
cc.title('Success/Positive Messages Examples');
cc.log("For Success/Positive messages use ok(...), success(...) or good(...) functions.");
cc.log("For example, calling ok('Some Text') will output:");
cc.ok('Some Text')
cc.log('')
cc.BGMagenta('By default, ok(...) function will output a message which has:');
cc.log('    \u2022 A Green Background Color');
cc.log('    \u2022 A \u2713 symbol at the beginning');
cc.log('    \u2022 The word \'OK\' as prefix');
cc.log('')
cc.log('Note that ok(...) function does accept the following parameters:');
cc.log('    \u2022 text: string - A Text');
cc.log('    \u2022 options?: object (Optional) - An object with the following properties:');
cc.log('        \u2022 removeSymbol?: boolean - Remove the \u2713 symbol from the beginning (Optional)');
cc.log('        \u2022 newPrefix?: string - A new prefix at the beginning (Optional)');
cc.log('')
cc.BGMagenta('Examples');
cc.log('1. Calling ok("Some Text", {removeSymbol: true}) will output:');
cc.ok("Some Text", {removeSymbol: true});
cc.log('')
cc.log('2. Calling ok("Some Text", {removeSymbol: true, newPrefix: "CustomPrefix"}) will output:');
cc.ok("Some Text", {removeSymbol: true, newPrefix: 'CustomPrefix'});
cc.log('')
cc.log('3. Calling ok("Some Text", {removeSymbol: true, newPrefix: ""}) will output:');
cc.ok("Some Text", {removeSymbol: true, newPrefix: ''});
cc.log('')
cc.log('4. Calling ok("Some Text") will output:');
cc.ok("Some Text");
cc.log('')
cc.BGMagenta('The success(...) and good(...) Functions');
cc.log('The success(...) and good(...) functions are the same as ok(...) function but with one difference:');
cc.log('    \u2022 By default, success(...) function has the word \'SUCCESS\' as prefix');
cc.log('    \u2022 By default, good(...) function has the word \'GOOD\' as prefix');
cc.log('')
cc.log('')
