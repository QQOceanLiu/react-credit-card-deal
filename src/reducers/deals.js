const dealsReducerDefaultState = [
    {
        id:'1234',
        description: 'Get 25% off when you take a Lyft',
        card: 'Discover', 
        validTime: '1/12 - 1/31', 
        merchant: 'Lyft', 
        tags: 'transportation'
    }
];

export default (state = dealsReducerDefaultState, action) => {
    switch (action.type) {
        case 'REMOVE_DEAL':
            return [
                ...state
            ];
        default:
            return state;
    }
};