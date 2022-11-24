import '../Unit/_Unit.css'
import body from '../assets/fullbody.png'
import background from '../assets/background.png'
import { useDispatch, useSelector } from 'react-redux';
import { showChestList, showArmList, showWeaponList, showBackList, showBeltList, showHeadList, showLegsList, showShoesList, chestActivate } from '../../Redux/actions';
import { Button } from '../Button/Button';


function Unit() {
    const dispatch = useDispatch();

    const activeArmor = useSelector(state => {
        return state.activeArmor
    });

    const chestList = useSelector(state => {
        return state.chest
    });
    
    const headList = useSelector(state => {
        return state.head
    });
    
    const legsList = useSelector(state => {
        return state.legs
    });
    
    const backList = useSelector(state => {
        return state.back
    });
    
    const weaponList = useSelector(state => {
        return state.weapon
    });
    
    const armList = useSelector(state => {
        return state.arms
    });
    
    const shoesList = useSelector(state => {
        return state.shoes
    });

    const beltList = useSelector(state => {
        return state.belt
    });
    
    const listsCondition = useSelector(state => {
        return state.lists
    });

    const chestHandler = () => {
        dispatch(showChestList());
    };  

    const beltHandler = () => {
        dispatch(showBeltList());
    };  

    const legsHandler = () => {
        dispatch(showLegsList());
    };  

    const shoesHandler = () => {
        dispatch(showShoesList());
    };  

    const headHandler = () => {
        dispatch(showHeadList());
    };  

    const armHandler = () => {
        dispatch(showArmList());
    };  

    const backHandler = () => {
        dispatch(showBackList());
    };  

    const weaponHandler = () => {
        dispatch(showWeaponList());
    };

    return(
        <div className="container">
            <div className="character">
                <img className="bg" src={background}></img>
                <img className="body" src={body}></img>
                <img className="chest" src={activeArmor.chest}></img>
                <img className="head" src={activeArmor.head}></img>
                <img className="legs" src={activeArmor.legs}></img>
                <img className="back" src={activeArmor.back}></img>
                <img className="weapon" src={activeArmor.weapon}></img>
                <img className="arms" src={activeArmor.arms}></img>
                <img className="shoes" src={activeArmor.shoes}></img>
                <img className="belt" src={activeArmor.belt}></img>
            </div>
            <div className="menu">
                <div className="text-menu">
                    <div className='text-button' onClick={chestHandler}>Верх</div>
                    <div className='text-button' onClick={beltHandler}>Пояс</div>
                    <div className='text-button' onClick={legsHandler}>Низ</div>
                    <div className='text-button' onClick={shoesHandler}>Обувь</div>
                    <div className='text-button' onClick={headHandler}>Голова</div>
                    <div className='text-button' onClick={armHandler}>Руки</div>
                    <div className='text-button' onClick={backHandler}>Спина</div>
                    <div className='text-button' onClick={weaponHandler}>Оружие</div>
                </div>
                <div className="clothes-menu">
                    {listsCondition.chest && chestList.map((item) => <Button data={item}/>)}
                    {listsCondition.belt && beltList.map((item) => <Button data={item}/>)}
                    {listsCondition.head && headList.map((item) => <Button data={item}/>)}
                    {listsCondition.legs && legsList.map((item) => <Button data={item}/>)}
                    {listsCondition.back && backList.map((item) => <Button data={item}/>)}
                    {listsCondition.weapon && weaponList.map((item) => <Button data={item}/>)}
                    {listsCondition.arms && armList.map((item) => <Button data={item}/>)}
                    {listsCondition.shoes && shoesList.map((item) => <Button data={item}/>)}
                </div>
            </div>
        </div>
    )
}

export default Unit 