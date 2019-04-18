import React from "react";
import ContentLoading from '../../../common/components/ContentLoading/ContentLoading.jsx'
import Cardinput from '../CardInput/CardInput.jsx'
import Brand from '../Brand/Brand.jsx'
import {debounce} from "../../../utils/debouncing";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameToSearch: ''
        };
    }


    componentWillMount() {
        this.props.setLoadingBrands(true);
        this.props.getFirstBrandsFromServer('');
        this.seacrhBrandsByNewName = debounce(event => this.props.getFirstBrandsFromServer(event.target.value), 500);
        window.addEventListener('scroll', this.getAddBrandsOnScroll);
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.getAddBrandsOnScroll);
    }


    changeName = (event) => {
        event.persist();
        this.setState({nameToSearch: event.target.value});
        this.props.setLoadingBrands(true);
        this.seacrhBrandsByNewName(event);
    };


    /*Функция на событие сролла в конец старницы*/
    getAddBrandsOnScroll = () => {
        if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight && this.props.nextLink && !this.props.loadingAdd) {
            this.props.getMoreBrandsFromServer();
        }
    };


    render() {
        return (
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className='col-md-3 col-12 align-self-start sticky-top'>
                        <Cardinput header={'Поиск брендов'}
                                   changeInput={this.changeName}
                                   placeholder={'Введите наименование'}/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <ContentLoading loading={this.props.loading}>
                            {this.props.count !== 0 ? this.props.list.map((item) => {
                                    return <Brand key={item.id}
                                                  item={item}/>
                                }) :
                                <h3>По вашему запросу, бренды не найдены((</h3>}
                            {/*Кнопка для случая если у пользователя очент длинный экран и первоначальный список отобразился и событие прокрутки в конец странцы не сработает*/}
                            {this.props.nextLink && <ContentLoading loading={this.props.loadingAdd}>
                                <div children='row'>
                                    <div className='col text-center'>
                                        <button type="button"
                                                onClick={() => {
                                                    this.props.getMoreBrandsFromServer()
                                                }}
                                                className="btn btn-primary btn-lg">Загрузить еще
                                        </button>
                                    </div>
                                </div>
                            </ContentLoading>}
                        </ContentLoading>
                    </div>
                </div>
            </div>
        )
    }
}


