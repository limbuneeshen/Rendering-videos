import React from 'react';

class SearchBar extends React.Component{
state = {term : ''};

onInputChange = (event) => {
  this.setState({term : event.target.value});
};

onFormSubmit = event => {
  event.preventDefault();
  
  this.props.onFormSubmit(this.state.term);
  //todo: make sure we call back from the parent component
};

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        vlaue={this.state.term} 
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;