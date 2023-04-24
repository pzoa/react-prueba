import iconMusic from '../../assets/imgs/musicicon.png'

export default function SongTicker({songTitle}) {
    return (
        <div className='sontitle'>
            <img src={iconMusic} alt="" />
            <p>{songTitle}</p>
        </div>
    )
}