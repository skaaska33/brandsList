import {connect} from "react-redux";
import Main from "../components/Main/Main.jsx";
import {
    getFirstBrandsFromServer,
    setLoadingBrands,
    getAdditionallyBrandsFromServer
} from "../reducer.js";


export default connect(
    state => ({
        list: state.brands.brandsList,
        loading: state.brands.loadingBrands,
        loadingAdd: state.brands.loadingBrandsAdd,
        nextLink: state.brands.nextLink,
        count: state.brands.countBrands,
    }),
    (dispatch) => ({
        getFirstBrandsFromServer: (nameToSearch) => dispatch(getFirstBrandsFromServer(nameToSearch)),
        setLoadingBrands: (loading) => dispatch(setLoadingBrands(loading)),
        getAdditionallyBrandsFromServer: () => dispatch(getAdditionallyBrandsFromServer()),
    })
)(Main);