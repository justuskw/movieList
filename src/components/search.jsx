var Search = (props) => (
    <div>    
        <input type="text" placeholder="search..." onChange={(event) => props.textBoxChange(event.target.value)}/>
        <input type="submit" value="Go!" onClick={props.search}/>
    </div>    
);