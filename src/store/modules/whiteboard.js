import tools from '../../tools/tool/tools';

const state = {
    tool: null,
    toolArgs: {
        size: 2,
        color: '#000000'
    }
};

const mutations = {
    //ToolArgs
    'SET_TOOL_COLOR'(state, toolColor) {
        state.toolArgs.color = toolColor;
    },
    'SET_TOOL_SIZE'(state, toolSize) {
        state.toolArgs.size = toolSize;
    },
    //Tool
    'SET_WHITEBOARD_TOOL'(state, tool) {
        state.tool = tool;
        if (tools[tool]) {
            tools[tool].activate();
        }
    }
}


const actions = {
    //ToolArgs
    setToolColor: ({
        commit
    }, toolColor) => {
        commit('SET_TOOL_COLOR', toolColor);
    },
    setToolSize: ({
        commit
    }, toolSize) => {
        commit('SET_TOOL_SIZE', toolSize);
    },
    //Tool
    setWhiteboardTool: ({
        commit
    }, tool) => {
        commit('SET_WHITEBOARD_TOOL', tool);
    }
}

const getters = {
    tool(state) {
        return state.tool;
    },
    toolArgs(state) {
        return state.toolArgs;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}