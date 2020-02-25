let store =  {
    _state : {
        deals : [
            {
                text: 'Cleaning',
                newText: '',
                status: false
            },
            {
                text: 'Homework',
                newText: '',
                status: true
            }
        ],
        newDealText : ''
    }, 
    getState() {
        return this._state;
    },
    inputNewDeal(text) {
        this.getState().newDealText = text;
        this.reRender();
    },
    reRender() {
        console.log('no function!');
    },
    subscribe(observer) {
        this.reRender = observer;
    },
    removeDeal(index) {
        this._state.deals.splice(index, 1);
        this.reRender();
    },
    editOldDeal(text, index) {
        this._state.deals[index].text = text;
        this._state.deals[index].newText = this._state.deals[index].text;
        this.reRender();
    },
    addTask() {
        let newTask = {
            id : this._state.deals.length + 1,
            text : this._state.newDealText,
            status : false
        }

        this._state.deals.push(newTask);
        this._state.newDealText = '';

        this.reRender();
    },
    checkDeal(index) {
        this._state.deals[index].status = !this._state.deals[index].status;
        this.reRender();
    }
}

export default store;