import { defineStore } from 'pinia'
import { ref } from "vue";
export const useFunctions = defineStore('functions', () => {


    function formatNb(number) {

        return `#${number.toString().padStart(3, 0)}`

    }

    /* Mappage plus lisible qu'un switch et pas de classes dynamiques en tailwind*/
    function ColorTypeIndex(type, modale) {
        const typeColors = {
            water: {
                default: "bg-water",
                opacityLow: "bg-waterLO"
            },
            fire: {
                default: "bg-fire",
                opacityLow: "bg-fireLO"
            },
            grass: {
                default: "bg-grass",
                opacityLow: "bg-grassLO"
            },
            fighting: {
                default: "bg-fighting",
                opacityLow: "bg-fightingLO"
            },
            flying: {
                default: "bg-flying",
                opacityLow: "bg-flyingLO"
            },
            steel: {
                default: "bg-steel",
                opacityLow: "bg-steelLO"
            },
            psychic: {
                default: "bg-psychic",
                opacityLow: "bg-psychicLO"
            },
            rock: {
                default: "bg-rock",
                opacityLow: "bg-rockLO"
            },
            fairy: {
                default: "bg-fairy",
                opacityLow: "bg-fairyLO"
            },
            ground: {
                default: "bg-ground",
                opacityLow: "bg-groundLO"
            },
            ghost: {
                default: "bg-ghost",
                opacityLow: "bg-ghostLO"
            },
            ice: {
                default: "bg-ice",
                opacityLow: "bg-iceLO"
            },
            dark: {
                default: "bg-dark",
                opacityLow: "bg-darkLO"
            },
            bug: {
                default: "bg-bug",
                opacityLow: "bg-bugLO"
            },
            normal: {
                default: "bg-normal",
                opacityLow: "bg-normalLO"
            },
            dragon: {
                default: "bg-dragon",
                opacityLow: "bg-dragonLO"
            },
            electric: {
                default: "bg-electric",
                opacityLow: "bg-electricLO"
            },
            poison: {
                default: "bg-poison",
                opacityLow: "bg-poisonLO"
            }
        };


        const color = modale ? typeColors[type].opacityLow : typeColors[type].default;
        return color;
    }

    function toFrTypeIndex(type) {
        const nameType = {
            water: "Eau",
            fire: "Feu",
            grass: "Plante",
            fighting: "Combat",
            flying: "Vol",
            steel: "Acier",
            psychic: "Psy",
            rock: "Roche",
            fairy: "Fée",
            ground: "Sol",
            ghost: "Spectre",
            ice: "Glace",
            dark: "Ténèbres",
            bug: "Insecte",
            normal: "Normal",
            dragon: "Dragon",
            electric: "Electrik",
            poison: "Poison"
        };

        const frType = nameType[type];
        return frType;
    }

    const isModal = ref(false);

    function getFrName(nameEntries) {
        for (const entry of nameEntries) {
            if (entry.language.name === 'fr') {
                return entry.name;
            }
        }
        return 'Pas de nom Fr disponible';
    };

    return { formatNb, ColorTypeIndex, isModal, getFrName, toFrTypeIndex }

})
