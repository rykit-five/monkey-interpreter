import {  } from './token';

function TestNextToken() {
    const input: string = '=+(){},';
    
    let tests: { [expectedType: string]: string } = {
        Token['ASSIGN']: '=',
        Token['PLUS']: '+'
    }
}