<div className={classes.card}>
<div className={classes.cardtop}>
          <span className={classes.name}></span>
          <span className={classes.icon}>
            <button
              type="button"
             
              className={classes.heartButton}
            >
              <HeartIcon  ></HeartIcon>
            </button>
          </span>
        </div>

<img
  className={classes.image}
  src={
    props.pic_url
      ? props.pic_url
      : props.gender === "Male"
      ? "https://www.w3schools.com/bootstrap4/img_avatar3.png"
      : "https://www.w3schools.com/bootstrap4/img_avatar5.png"
  }
/>

<br></br>

<br></br>

<div className={classes["card-body"]}>
  <ul>
    {props.city == null ? null : (
      <li>
        {" "}
        <b>city: </b>
        {props.city}
      </li>
    )}
    {props.email == null ? null : (
      <li>
        {" "}
        <b>mail:</b>{" "}
        <a href={`mailto:${props.email}?subject=Hi, ${props.Title}`}>
          {props.email}
        </a>{" "}
      </li>
    )}

    {props.gender == null ? null : (
      <li>
        <b>gender: </b> {props.gender}
      </li>
    )}
  </ul>
</div>

<br></br>
<div className={classes.car}>
  {props.car === true ? (
    <img className={classes.carIcon} src={car}></img>
  ) : null}
</div>
</div>