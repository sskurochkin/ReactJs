import './app-info.css'

const AppInfo = ({employers, riseEmployers}) =>{
    return(
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Премию получат: {riseEmployers}</h2>
        </div>
    )
}

export default AppInfo;