import React from "react";
import ContentLoading from '../../../common/components/ContentLoading/ContentLoading.jsx'
import Cardinput from '../CardInput/CardInput.jsx'
import Brand from '../Brand/Brand.jsx'
import {getFirstBrandsFromServer} from "../../reducer";
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
    }


    changeName = (event) => {
        event.persist();
        this.setState({nameToSearch: event.target.value});
        this.props.setLoadingBrands(true);
        this.seacrhBrandsByNewName(event);
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className='col-md-3 col-12 align-self-start sticky-top'>
                        <Cardinput header={'Поиск брендов'}
                                   changeInput={this.changeName}
                                   placeholder={'Введите наименование'}/>
                    </div>
                    <div className='col-md-9 col-12'>
                        <ContentLoading loading={this.props.loading}>
                            {this.props.list.map((item) => {
                                    return <Brand key={item.id}
                                                  item={item}/>
                                })}
                        </ContentLoading>
                    </div>
                </div>
            </div>
        )
    }
}


