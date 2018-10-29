class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();

        this.state = ({
            WeatherDaily: [],
            CityNameSearch: "",
        })
    }
    componentDidMount = () => {
        fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=Hanoi&key=8b4069a9c85942caaa7903e24f179cf7")
            .then(result => {
                if (result.status == 200) {
                    return result.json()
                }
                else {
                    alert(("error: " + result.statusText))
                }
            })
            .then(WeatherObject => {
                this.setState({
                    WeatherDaily: WeatherObject
                });
            })
    }
    Output = () => {
        this.setState({ CityNameSearch: this.inputRef.current.value });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.CityNameSearch !== prevState.CityNameSearch) {
            fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=" + this.state.CityNameSearch + "&key=8b4069a9c85942caaa7903e24f179cf7")
                .then(result => {
                    if (result.status == 200) {
                        return result.json()
                    }
                    else {
                        alert(("error: " + result.statusText))
                    }
                })
                .then(WeatherObject => {
                    this.setState({
                        WeatherDaily: WeatherObject
                    });
                })
        }
    }

    render() {
        var date = new Date();
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var Icons = [];
        var Temp = [];
        var Description = [];
        var AppTemp = [];
        var WindSpeed = [];
        var Humidity = [];
        var AppTempM = [];
        var DateNext = [];
        if (this.state.WeatherDaily.length != 0) {
            Icons[0] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[0].weather.icon + ".png";
            Temp[0] = this.state.WeatherDaily.data[0].temp;
            Description[0] = this.state.WeatherDaily.data[0].weather.description;
            WindSpeed[0] = this.state.WeatherDaily.data[0].wind_spd.toFixed(2);
            AppTemp[0] = this.state.WeatherDaily.data[0].app_max_temp
            Humidity[0] = this.state.WeatherDaily.data[0].rh
            AppTempM[0] = this.state.WeatherDaily.data[0].app_min_temp

            DateNext[0] = this.state.WeatherDaily.data[0].valid_date
            DateNext[1] = this.state.WeatherDaily.data[1].valid_date
            DateNext[2] = this.state.WeatherDaily.data[2].valid_date
            DateNext[3] = this.state.WeatherDaily.data[3].valid_date
            DateNext[4] = this.state.WeatherDaily.data[4].valid_date
            DateNext[5] = this.state.WeatherDaily.data[5].valid_date
            DateNext[6] = this.state.WeatherDaily.data[6].valid_date
            DateNext[7] = this.state.WeatherDaily.data[7].valid_date
            DateNext[8] = this.state.WeatherDaily.data[8].valid_date
            DateNext[9] = this.state.WeatherDaily.data[9].valid_date

            Icons[1] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[1].weather.icon + ".png";
            AppTemp[1] = this.state.WeatherDaily.data[1].app_max_temp
            AppTempM[1] = this.state.WeatherDaily.data[1].app_min_temp
            Description[1] = this.state.WeatherDaily.data[1].weather.description;
            Icons[2] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[2].weather.icon + ".png";
            AppTemp[2] = this.state.WeatherDaily.data[2].app_max_temp
            AppTempM[2] = this.state.WeatherDaily.data[2].app_min_temp
            Description[2] = this.state.WeatherDaily.data[2].weather.description;
            Icons[3] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[3].weather.icon + ".png";
            AppTemp[3] = this.state.WeatherDaily.data[3].app_max_temp
            AppTempM[3] = this.state.WeatherDaily.data[3].app_min_temp
            Description[3] = this.state.WeatherDaily.data[3].weather.description;
            Icons[4] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[4].weather.icon + ".png";
            AppTemp[4] = this.state.WeatherDaily.data[4].app_max_temp
            AppTempM[4] = this.state.WeatherDaily.data[4].app_min_temp
            Description[4] = this.state.WeatherDaily.data[4].weather.description;
            Icons[5] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[5].weather.icon + ".png";
            AppTemp[5] = this.state.WeatherDaily.data[5].app_max_temp
            AppTempM[5] = this.state.WeatherDaily.data[5].app_min_temp
            Description[5] = this.state.WeatherDaily.data[1].weather.description;
            Icons[6] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[6].weather.icon + ".png";
            AppTemp[6] = this.state.WeatherDaily.data[6].app_max_temp
            AppTempM[6] = this.state.WeatherDaily.data[6].app_min_temp
            Description[6] = this.state.WeatherDaily.data[6].weather.description;
            Icons[7] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[7].weather.icon + ".png";
            AppTemp[7] = this.state.WeatherDaily.data[7].app_max_temp
            AppTempM[7] = this.state.WeatherDaily.data[7].app_min_temp
            Description[7] = this.state.WeatherDaily.data[7].weather.description;
            Icons[8] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[8].weather.icon + ".png";
            AppTemp[8] = this.state.WeatherDaily.data[8].app_max_temp
            AppTempM[8] = this.state.WeatherDaily.data[8].app_min_temp
            Description[8] = this.state.WeatherDaily.data[8].weather.description;
            Icons[9] = "https://www.weatherbit.io/static/img/icons/" + this.state.WeatherDaily.data[9].weather.icon + ".png";
            AppTemp[9] = this.state.WeatherDaily.data[9].app_max_temp
            AppTempM[9] = this.state.WeatherDaily.data[9].app_min_temp
            Description[9] = this.state.WeatherDaily.data[9].weather.description;

        }

        return (
            <div>

                <nav className="navbar navbar-dark bg-dark sticky-top" id="mainNav">

                    <div className="input-group col-sm-8 col-md-6 col-lg-4">
                        <input className="form-control search-box" type="search" ref={this.inputRef} placeholder="City name..." aria-label="Search" />
                        <div className="input-group-btn">
                            <button className="btn btn-outline-light" onClick={this.Output} >Search</button>
                        </div>
                    </div>

                </nav>

                <div className="container-fluid padding">
                    <div className="Weathernow">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <h2>{this.state.WeatherDaily.city_name}, {this.state.WeatherDaily.country_code}</h2>
                            <img src={Icons[0]} height="90px;" width="90px;" alt="weather-icon"></img>
                            <h2>{Temp[0]}<sup>o</sup>C</h2>
                            <h4>{Description[0]}</h4>
                            <p>Today is: {date.getHours()}:{date.getMinutes()} {month[date.getMonth()]} {date.getDate()}</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-4 col-sm-2">
                                    <pre>Feel like: {AppTemp[0]}<sup>o</sup>C   Wind Speed: {WindSpeed[0]} m/s</pre>
                                    <p>Humidity: {Humidity[0]}%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <p>Daily</p>
                        <div class="horizontal-scroll-wrapper">
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[0]}
                                    </li>
                                    <li><img src={Icons[0]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[0]}<sup>o</sup>C  {AppTempM[0]}<sup>o</sup>C</li>
                                    <li>{Description[0]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[1]}
                                    </li>
                                    <li><img src={Icons[1]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[1]}<sup>o</sup>C  {AppTempM[1]}<sup>o</sup>C</li>
                                    <li>{Description[1]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[2]}
                                    </li>
                                    <li><img src={Icons[2]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[2]}<sup>o</sup>C  {AppTempM[2]}<sup>o</sup>C</li>
                                    <li>{Description[2]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[3]}
                                    </li>
                                    <li><img src={Icons[3]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[3]}<sup>o</sup>C  {AppTempM[3]}<sup>o</sup>C</li>
                                    <li>{Description[3]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[4]}
                                    </li>
                                    <li><img src={Icons[4]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[4]}<sup>o</sup>C  {AppTempM[4]}<sup>o</sup>C</li>
                                    <li>{Description[4]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[5]}
                                    </li>
                                    <li><img src={Icons[5]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[5]}<sup>o</sup>C  {AppTempM[5]}<sup>o</sup>C</li>
                                    <li>{Description[5]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[6]}
                                    </li>
                                    <li><img src={Icons[6]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[6]}<sup>o</sup>C  {AppTempM[6]}<sup>o</sup>C</li>
                                    <li>{Description[6]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[7]}
                                    </li>
                                    <li><img src={Icons[7]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[7]}<sup>o</sup>C  {AppTempM[7]}<sup>o</sup>C</li>
                                    <li>{Description[7]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[8]}
                                    </li>
                                    <li><img src={Icons[8]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[8]}<sup>o</sup>C  {AppTempM[8]}<sup>o</sup>C</li>
                                    <li>{Description[8]}</li>
                                </ul>
                            </div>
                            <div class="weatherne">
                                <ul type="none">
                                    <li>
                                        {DateNext[9]}
                                    </li>
                                    <li><img src={Icons[9]} height="50px;" width="50px;" alt="weather-icon"></img></li>
                                    <li>{AppTemp[9]}<sup>o</sup>C  {AppTempM[9]}<sup>o</sup>C</li>
                                    <li>{Description[9]}</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Weather />,
    document.getElementById("root")
)