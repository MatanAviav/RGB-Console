const cc = require('../rgbconsole');

cc.log('')
cc.title('Warning Messages Examples');
cc.log("For Warning messages use warn(...) function.");
cc.log("For example, calling warn('Some Text') will output:");
cc.warn('Some Text')
cc.log('')
cc.BGMagenta('By default, warn(...) function will output a message which has:');
cc.log('    \u2022 A Yellow Background Color');
cc.log('    \u2022 A \u26A0 symbol at the beginning');
cc.log('    \u2022 The word \'WARNING\' as prefix');
cc.log('')
cc.log('Note that warn(...) function does accept the following parameters:');
cc.log('    \u2022 text: string - A Text');
cc.log('    \u2022 options?: object (Optional) - An object with the following properties:');
cc.log('        \u2022 removeSymbol?: boolean (Optional) - Remove the \u26A0 symbol from the beginning (Optional)');
cc.log('        \u2022 newPrefix?: string (Optional) - A new prefix at the beginning (Optional)');
cc.log('')
cc.BGMagenta('Examples');
cc.log('1. Calling warn("Some Text", {removeSymbol: true}) will output:');
cc.warn("Some Text", {removeSymbol: true});
cc.log('')
cc.log('2. Calling warn("Some Text", {removeSymbol: true, newPrefix: "CustomPrefix"}) will output:');
cc.warn("Some Text", {removeSymbol: true, newPrefix: 'CustomPrefix'});
cc.log('')
cc.log('3. Calling warn("Some Text", {removeSymbol: true, newPrefix: ""}) will output:');
cc.warn("Some Text", {removeSymbol: true, newPrefix: ''});
cc.log('')
cc.log('4. Calling warn("Some Text") will output:');
cc.warn("Some Text");
cc.log('')
cc.log('')
