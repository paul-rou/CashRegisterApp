import { Sell } from "@/pages/historique";

const paymentMethodTranslation: {
    [key: string]: string
} = {
    "cash": "Espèces",
    "card": "Carte de crédit",
    "cheque": "Chèque",
    "other": "Autre",
}

const marketLocationTranslation: {
    [key: string]: string
} = {
    "etampes" : "Etampes",
    "corbreuse": "Corbreuse",
    "other": "Autre",
}

const getDisplayableTableFromSell = (sells: Sell[]): Sell[] => {

    const displayableSells = sells.map((sell) => {
        return {
            id: sell.id,
            date: sell.date,
            productName: sell.productName,
            numberSold: sell.numberSold,
            price: sell.price * sell.numberSold,
            paymentMethod: paymentMethodTranslation[sell.paymentMethod],
            marketLocation: marketLocationTranslation[sell.marketLocation],
        };
    });

  return displayableSells;
}

export { getDisplayableTableFromSell };