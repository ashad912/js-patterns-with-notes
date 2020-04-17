import {ToolsUI} from './after/ToolsUI.js'
import {ToolsFactory} from './after/ToolsFactory.js'
import {DrawingBoardUI} from './after/DrawingBoardUI.js'
import {DrawingContextUI} from './after/DrawingContextUI.js'

const factory = new ToolsFactory()
const tools = new ToolsUI('.js-tools')
const board = new DrawingBoardUI('.js-canvas', 500, 300)
const context = new DrawingContextUI('.js-context')

//subscribe callback was passed at the start of the script, all variables have state from that moment (variables are classes, so we can manipulate its props by classes methods) 
tools.subscribe(selectedTool => { //3a. function passed as an argument!! first subscribe callback invoked from button listener
    //4. selectedTool is passed from button listener
    const tool = factory.getTool(selectedTool)
    board.changeTool(tool)
})

tools.subscribe(selectedTool => { //3b. second subscribe callback
    context.updateContext(selectedTool)
})