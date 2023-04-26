const oneResult = ({name,avatar,myurl}) => {

    return(
      <div className="divBase">
        <div className="divDivision">
           <img className="img" src={avatar}/>
           <h3  className="name">{name}</h3>
        </div>
        <div className="divDivision">
           <h5  className="txt">Profile link:</h5>
           <a   className="url" href={myurl}>{myurl}</a>
          
        </div>
      </div>
    )
}

export default oneResult