/**
 * @author Matan Aviav (https://github.com/MatanAviav)
 * @description Style your Node.js Server console (terminal) with text colors, background colors and symbols. {@link https://github.com/MatanAviav/RGB-Console|Click for Documentation}
 * @property {Object}  TEXT_COLORS              - An Object With Text Colors
 * @property {Object}  BG_COLORS                - An Object With Background Colors
 */
class RGBConsole
{
    /**
     * @static
     * @description Reset All Styles
     * @type {string}
     */
    static RESET = "\x1b[0m";

    /**
     * @static
     * @description Enable Bold Text
     * @type {string}
     */
    static BOLD = "\x1b[1m"

    /**
     * @static
     * @description Enable Underline Text
     * @type {string}
     */
    static UNDERLINE = "\x1b[4m"

    /**
     * @static
     * @description An Object With Text Colors
     * @property {string} BLACK Black
     * @property {string} BLUE Blue
     * @property {string} CYAN Cyan
     * @property {string} GREEN Green
     * @property {string} MAGENTA Magenta
     * @property {string} RED Red
     * @property {string} WHITE White
     * @property {string} YELLOW Yellow
     * @type {Object}
     */
    static TEXT_COLORS = {
        BLACK: "\x1b[30m",
        BLUE: "\x1b[34m",
        CYAN: "\x1b[36m",
        GREEN: "\x1b[32m",
        MAGENTA: "\x1b[35m",
        RED: "\x1b[31m",
        WHITE:"\x1b[37m",
        YELLOW: "\x1b[33m"
    }

    /**
     * @static
     * @description An Object With Background Colors
     * @property {string} BLUE Blue
     * @property {string} CYAN Cyan
     * @property {string} GREEN Green
     * @property {string} MAGENTA Magenta
     * @property {string} RED Red
     * @property {string} WHITE White
     * @property {string} YELLOW Yellow
     * @type {Object}
     */
    static BG_COLORS = {
        BLUE: "\x1b[44m",
        CYAN: "\x1b[46m",
        GREEN: "\x1b[42m",
        MAGENTA: "\x1b[45m",
        RED: "\x1b[41m",
        WHITE: "\x1b[47m",
        YELLOW: "\x1b[43m"
    }

    //underline text
    /**
     * @function
     * @description Log an UNDERLINED text into the console with selected text_color
     * @param  {string} text A text to log into the console
     * @param {string} text_color A color from RGBConsole.TEXT_COLORS object
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static underline = (text, text_color, isBold) => {
        let boldTemp = isBold == undefined || !isBold ? '' : this.BOLD;
        console.log( text_color + this.UNDERLINE + boldTemp + text + this.RESET);
    }

    /**
     * @function
     * @description Log an UNDERLINED text into the console with BLACK text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static blackUnderline = (text, isBold) =>{
        this.underline(text, this.TEXT_COLORS.BLACK, isBold);
    }
    static underlineBlack = this.blackUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with GREEN text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static greenUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.GREEN, isBold);
    }
    static underlineGreen = this.greenUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with YELLOW text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static yellowUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.YELLOW, isBold);
    }
    static underlineYellow = this.yellowUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with BLUE text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static blueUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.BLUE, isBold);
    }
    static underlineBlue = this.blueUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with MAGENTA text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static magentaUnderline = (text, isBold) =>{
        this.underline(text, this.TEXT_COLORS.MAGENTA, isBold);
    }
    static underlineMagenta = this.magentaUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with CYAN text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static cyanUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.CYAN, isBold);
    }
    static underlineCyan = this.cyanUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with WHITE text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static whiteUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.WHITE, isBold);
    }
    static underlineWhite = this.whiteUnderline;

    /**
     * @function
     * @description Log an UNDERLINED text into the console with RED text color
     * @param  {string} text A text to log into the console
     * @param {boolean} [isBold] Make the text bolded (Optional). Default: false
     * @static
     */
    static redUnderline = (text, isBold) => {
        this.underline(text, this.TEXT_COLORS.RED, isBold);
    }
    static underlineRed = this.redUnderline;

    //bold text
    /**
     * @function
     * @description Log a BOLD text into the console with selected text_color
     * @param  {string} text A text to log into the console
     * @param {string} text_color A color from RGBConsole.TEXT_COLORS object
     * @static
     */
    static bold = (text, text_color) => {
        console.log( text_color + this.BOLD + text + this.RESET);
    }

    /**
     * @function
     * @description Log a BOLD text into the console with BLACK text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static blackBold = (text) =>{
        this.bold(text, this.TEXT_COLORS.BLACK);
    }
    static boldBlack = this.blackBold;

    /**
     * @function
     * @description Log a BOLD text into the console with GREEN text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static greenBold = (text) => {
        this.bold(text, this.TEXT_COLORS.GREEN);
    }
    static boldGreen = this.greenBold;

    /**
     * @function
     * @description Log a BOLD text into the console with YELLOW text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static yellowBold = (text) => {
        this.bold(text, this.TEXT_COLORS.YELLOW);
    }
    static boldYellow = this.yellowBold;

    /**
     * @function
     * @description Log a BOLD text into the console with BLUE text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static blueBold = (text) => {
        this.bold(text, this.TEXT_COLORS.BLUE);
    }
    static boldBlue = this.blueBold;

    /**
     * @function
     * @description Log a BOLD text into the console with MAGENTA text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static magentaBold = (text) =>{
        this.bold(text, this.TEXT_COLORS.MAGENTA);
    }
    static boldMagenta = this.magentaBold;

    /**
     * @function
     * @description Log a BOLD text into the console with CYAN text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static cyanBold = (text) => {
        this.bold(text, this.TEXT_COLORS.CYAN);
    }
    static boldCyan = this.cyanBold;

    /**
     * @function
     * @description Log a BOLD text into the console with WHITE text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static whiteBold = (text) => {
        this.bold(text, this.TEXT_COLORS.WHITE);
    }
    static boldWhite = this.whiteBold;

    /**
     * @function
     * @description Log a BOLD text into the console with RED text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static redBold = (text) => {
        this.bold(text, this.TEXT_COLORS.RED);
    }
    static boldRed = this.redBold;

    //regular text
    /**
     * @function
     * @description Log a text into the console with BLACK text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static black = (text) => {
        console.log( this.TEXT_COLORS.BLACK  + text + this.RESET);
    }
    static textBlack = this.black;

    /**
     * @function
     * @description Log a text into the console with GREEN text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static green = (text) => {
        console.log( this.TEXT_COLORS.GREEN + text + this.RESET);
    }
    static textGreen = this.green;

    /**
     * @function
     * @description Log a text into the console with YELLOW text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static yellow = (text) =>{
        console.log( this.TEXT_COLORS.YELLOW + text + this.RESET);
    }
    static textYellow = this.yellow;

    /**
     * @function
     * @description Log a text into the console with BLUE text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static blue = (text) =>{
        console.log( this.TEXT_COLORS.BLUE + text + this.RESET);
    }
    static textBlue = this.blue;

    /**
     * @function
     * @description Log a text into the console with MAGENTA text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static magenta = (text) => {
        console.log( this.TEXT_COLORS.MAGENTA + text + this.RESET);
    }
    static textMagenta = this.magenta;

    /**
     * @function
     * @description Log a text into the console with CYAN text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static cyan = (text) => {
        console.log( this.TEXT_COLORS.CYAN + text + this.RESET);
    }
    static textCyan = this.cyan;

    /**
     * @function
     * @description Log a text into the console with WHITE text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static white = (text) => {
        console.log( this.TEXT_COLORS.WHITE + text + this.RESET);
    }
    static textWhite = this.white;

    /**
     * @function
     * @description Log a text into the console with RED text color
     * @param  {string} text A text to log into the console
     * @static
     */
    static red = (text) => {
        console.log( this.TEXT_COLORS.RED + text + this.RESET);
    }
    static textRed = this.red;

    //background
    /**
     * @function
     * @description Log a text into the console, with selected background color and text color (optional)
     * @param  {string} text A text to log into the console
     * @param  {string} bg_color A background color from RGBConsole.BG_COLORS object
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static bg = (text, bg_color, text_color) => {
        console.log( bg_color + (!text_color ? this.TEXT_COLORS.BLACK : text_color) + ' ' + text, this.RESET);
    }

    /**
     * @function
     * @description Log a text into the console, with WHITE background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static whiteBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.WHITE, text_color);
    }
    static BGWhite = this.whiteBG;

    /**
     * @function
     * @description Log a text into the console, with RED background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static redBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.RED, text_color);
    }
    static BGRed = this.redBG;

    /**
     * @function
     * @description Log a text into the console, with GREEN background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static greenBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.GREEN, text_color);
    }
    static BGGreen = this.greenBG;

    /**
     * @function
     * @description Log a text into the console, with YELLOW background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static yellowBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.YELLOW, text_color);
    }
    static BGYellow = this.yellowBG;

    /**
     * @function
     * @description Log a text into the console, with BLUE background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static blueBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.BLUE, text_color);
    }
    static BGBlue = this.blueBG;

    /**
     * @function
     * @description Log a text into the console, with MAGENTA background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static magentaBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.MAGENTA, text_color);
    }
    static BGMagenta = this.magentaBG;

    /**
     * @function
     * @description Log a text into the console, with CYAN background color
     * @param  {string} text A text to log into the console
     * @param {string} [text_color] A text color from RGBConsole.TEXT_COLORS object (Optional). Default text color: BLACK
     * @static
     */
    static cyanBG = (text, text_color) => {
        this.bg(text, this.BG_COLORS.CYAN, text_color);
    }
    static BGCyan = this.cyanBG;

    //main
    /**
     * @function
     * @description Log a text into the console, with no style (like simple console.log() function)
     * @param  {string} text A text to log into the console
     * @static
     */
    static log = (text) => {
        console.log( text, this.RESET);
    }

    /**
     * @function
     * @description Log a text (TITLE) into the console, with CYAN background color
     * @param  {string} text A text to log into the console
     * @static
     */
    static title = (text) => {
        console.log(this.BG_COLORS.CYAN + this.TEXT_COLORS.BLACK + ' ' + text, this.RESET);
    }

    /**
     * @function
     * @description Log a text (WARNING) into the console, with YELLOW background color, a WARNING symbol at the beginning and the word "WARNING" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style
     * @param  {boolean} [options.removeSymbol] Remove the WARNING symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static warn = (text, options) => {
        let temp = this.BG_COLORS.YELLOW + this.TEXT_COLORS.BLACK + ' ';
        if( options == undefined ) {
            temp += '\u26A0 WARNING: ';
        }
        else {
            temp += ((options.removeSymbol != undefined && !options.removeSymbol) || options.removeSymbol == undefined) ? '\u26A0 ' : '';
            temp += (options.newPrefix != undefined ? (String(options.newPrefix).trim() == '' ? '' : options.newPrefix + ': ') : 'WARNING: ');
        }
        console.log( temp + text + ' ' + this.RESET);
    }

    /**
     * @function
     * @description Log a text (OK) into the console, with GREEN background color, an OK symbol at the beginning and the word "OK" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the OK symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static ok = (text, options) => {
        let temp = this.BG_COLORS.GREEN + this.TEXT_COLORS.BLACK + ' ';
        if( options == undefined ) {
            temp += '\u2713 OK: ';
        }
        else {
            temp += ((options.removeSymbol != undefined && !options.removeSymbol) || options.removeSymbol == undefined) ? '\u2713 ' : '';
            temp += (options.newPrefix != undefined ? (String(options.newPrefix).trim() == '' ? '' : options.newPrefix + ': ') : 'OK: ');
        }
        console.log( temp + text + ' ' + this.RESET);
    }

    /**
     * @function
     * @description Log a text (GOOD) into the console, with GREEN background color, an OK symbol at the beginning and the word "Good" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the OK symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static good = (text, options) => {
        if( options == undefined ) {
            options = {};
            options.newPrefix = 'GOOD';
        }
        else if( options.newPrefix == undefined ){
            options.newPrefix = 'GOOD';
        }
        this.ok(text, options);
    }

    /**
     * @function
     * @description Log a text (SUCCESS) into the console, with GREEN background color, an OK symbol at the beginning and the word "SUCCESS" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the OK symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static success = (text, options) => {
        if( options == undefined ) {
            options = {};
            options.newPrefix = 'SUCCESS';
        }
        else if( options.newPrefix == undefined ){
            options.newPrefix = 'SUCCESS';
        }
        this.ok(text, options);
    }

    /**
     * @function
     * @description Log a text (ERROR) into the console, with RED background color, a X symbol at the beginning and the word "ERROR" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the X symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static error = (text, options) => {
        let temp = this.BG_COLORS.RED + this.TEXT_COLORS.BLACK + ' ';
        if( options == undefined ) {
            temp += '\u2715 ERROR: ';
        }
        else {
            temp += ((options.removeSymbol != undefined && !options.removeSymbol) || options.removeSymbol == undefined) ? '\u2715 ' : '';
            temp += (options.newPrefix != undefined ? (String(options.newPrefix).trim() == '' ? '' : options.newPrefix + ': ') : 'ERROR: ');
        }
        console.log( temp + text + ' ' + this.RESET);
    }

    /**
     * @function
     * @description Log a text (BAD) into the console, with RED background color, a X symbol at the beginning and the word "BAD" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the X symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static bad = (text, options) => {
        if( options == undefined ) {
            options = {};
            options.newPrefix = 'BAD';
        }
        else if( options.newPrefix == undefined ){
            options.newPrefix = 'BAD';
        }
        this.error(text, options);
    }

    /**
     * @function
     * @description Log a text (FAIL) into the console, with RED background color, a X symbol at the beginning and the word "FAIL" as prefix
     * @param  {string} text A text to log into the console
     * @param  {object} [options] Options for style (Optional)
     * @param  {boolean} [options.removeSymbol] Remove the X symbol from the beginning (Optional)
     * @param  {string} [options.newPrefix] A new prefix at the beginning (Optional)
     * @static
     */
    static fail = (text, options) =>{
        if( options == undefined ) {
            options = {};
            options.newPrefix = 'FAIL';
        }
        else if( options.newPrefix == undefined ){
            options.newPrefix = 'FAIL';
        }
        this.error(text, options);
    }
}
module.exports = RGBConsole;
