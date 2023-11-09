import toast from 'react-hot-toast';

type GameName = string;

export const useNotification = () => {
    const added = (gameName: GameName) => {
        toast.success(`${gameName} - has been added to cart 🎉`);
    };

    const removed = (gameName: GameName) => {
        toast.success(`${gameName} - has been removed from cart 😔`);
    };

    const cartCleared = () => {
        toast.success('Your cart has been cleared - not a real store 😱!');
    };

    return { added, removed, cartCleared };
};
