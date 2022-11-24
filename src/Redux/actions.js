import { CHEST_LIST, ARM_LIST ,WEAPON_LIST ,BACK_LIST ,BELT_LIST ,HEAD_LIST ,LEGS_LIST ,SHOES_LIST, 
    CHEST_ACTIVE, ARMS_ACTIVE, WEAPON_ACTIVE, BACK_ACTIVE, BELT_ACTIVE, HEAD_ACTIVE, LEGS_ACTIVE, SHOES_ACTIVE } from "./types";

export function showChestList() {
    return {
        type: CHEST_LIST
    }
};

export function showArmList() {
    return {
        type: ARM_LIST
    }
};

export function showWeaponList() {
    return {
        type: WEAPON_LIST
    }
};

export function showBackList() {
    return {
        type: BACK_LIST
    }
};

export function showHeadList() {
    return {
        type: HEAD_LIST
    }
};

export function showShoesList() {
    return {
        type: SHOES_LIST
    }
};

export function showLegsList() {
    return {
        type: LEGS_LIST
    }
};

export function showBeltList() {
    return {
        type: BELT_LIST
    }
};

export function chestActivate(id) {
    return {
        type: CHEST_ACTIVE,
        id: id
    }
};

export function armsActivate(id) {
    return {
        type: ARMS_ACTIVE,
        id: id
    }
};

export function headActivate(id) {
    return {
        type: HEAD_ACTIVE,
        id: id
    }
};

export function legsActivate(id) {
    return {
        type: LEGS_ACTIVE,
        id: id
    }
};

export function backActivate(id) {
    return {
        type: BACK_ACTIVE,
        id: id
    }
};

export function weaponActivate(id) {
    return {
        type: WEAPON_ACTIVE,
        id: id
    }
};

export function beltActivate(id) {
    return {
        type: BELT_ACTIVE,
        id: id
    }
};

export function shoesActivate(id) {
    return {
        type: SHOES_ACTIVE,
        id: id
    }
};
