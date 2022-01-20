import './Cards.css'

const Cards = ({ setGetProps, setIsActive, toggle, data }) => {
  const handleClick = data => {
    setGetProps(data)
    setIsActive(true)
    toggle()
  }

  return (
    <div className='cards' onClick={() => handleClick(data)}>
      <img
        src={`http://image.tmdb.org/t/p/w200${data.poster_path}`}
        className='poster'
        alt='poster'
      ></img>
      <div className='caption'>
        <h3 className='cardTitle'>
          {data.title ? data.title : data.original_name}
          {` `}
          {console.log(
            'release_date',
            data.release_date,
            'data.first_air_date',
            data.first_air_date
          )}
          {data.release_date && data.release_date.slice(0, 4)}
          {data.first_air_date && data.first_air_date.slice(0, 4)}
        </h3>
      </div>
    </div>
  )
}
export default Cards
