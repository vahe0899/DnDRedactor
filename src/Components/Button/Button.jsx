import { useDispatch, useSelector } from 'react-redux';
import { chestActivate, armsActivate, weaponActivate, backActivate, beltActivate, headActivate, legsActivate, shoesActivate } from '../../Redux/actions';

export function Button(props) {

    const listsCondition = useSelector(state => {
        return state.lists
    });

    const dispatch = useDispatch();
    
    const activeChestHandler = () => {
        dispatch(chestActivate(props.data.id));
    };  
    
    const activeBeltHandler = () => {
        dispatch(beltActivate(props.data.id));
    };  
    
    const activeHeadHandler = () => {
        dispatch(headActivate(props.data.id));
    };  
    
    const activeLegsHandler = () => {
        dispatch(legsActivate(props.data.id));
    };  
    
    const activeBackHandler = () => {
        dispatch(backActivate(props.data.id));
    };  
    
    const activeWeaponHandler = () => {
        dispatch(weaponActivate(props.data.id));
    };  
    
    const activeArmsHandler = () => {
        dispatch(armsActivate(props.data.id));
    };  
    
    const activeShoesHandler = () => {
        dispatch(shoesActivate(props.data.id));
    };  

    return (
        <div className="clothes-buttons">
            {listsCondition.chest && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeChestHandler}></div>}
            {listsCondition.belt && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeBeltHandler}></div>}
            {listsCondition.head && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeHeadHandler}></div>}
            {listsCondition.legs && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeLegsHandler}></div>}
            {listsCondition.back && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeBackHandler}></div>}
            {listsCondition.weapon && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeWeaponHandler}></div>}
            {listsCondition.arms && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeArmsHandler}></div>}
            {listsCondition.shoes && <div className='clothes-button' style={{backgroundImage: `url(${props.data.trimmed})`}} key={props.data.id} onClick={activeShoesHandler}></div>}
        </div>        
    )
}