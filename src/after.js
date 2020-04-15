import {ToolsUI} from './after/ToolsUI.js'
import {ToolsFactory} from './after/ToolsFactory.js'
import {DrawingBoardUI} from './after/DrawingBoardUI.js'
import {DrawingContextUI} from './after/DrawingContextUI.js'

const factory = new ToolsFactory()
const tools = new ToolsUI('.js-tools')
const board = new DrawingBoardUI('.js-canvas', 500, 300)
const context = new DrawingContextUI('.js-context')

tools.subscribe(selectedTool => { //1. function passed as an argument!! callback
    //4. selectedTool is passed from button listener
    const tool = factory.getTool(selectedTool)
    board.changeTool(tool)
})

tools.subscribe(selectedTool => {
    context.updateContext(selectedTool)
})