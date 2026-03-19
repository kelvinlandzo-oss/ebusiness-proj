import React, { createContext, useState, useContext, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
  size?: string;
  color?: string;
}

export interface FavoritesItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  favorites: FavoritesItem[];
  addToFavorites: (item: FavoritesItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorited: (id: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Classic Cotton T-Shirt",
      price: "GH₵85",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      quantity: 1,
      category: "Tops",
      size: "M",
      color: "#000000",
    },
    {
      id: 7,
      name: "Classic Blue Jeans",
      price: "GH₵320",
      image: "https://images.unsplash.com/photo-1542272604-787c62d465d1",
      quantity: 1,
      category: "Bottoms",
      size: "M",
      color: "#00008B",
    },
    {
      id: 13,
      name: "Casual Day Dress",
      price: "GH₵280",
      image: "https://images.unsplash.com/photo-1595889951946-c74c6f7ad1db",
      quantity: 1,
      category: "Dresses",
      size: "M",
      color: "#FFFFFF",
    },
  ]);

  const [favorites, setFavorites] = useState<FavoritesItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + item.quantity);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addToFavorites = (item: FavoritesItem) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const isFavorited = (id: number) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorited,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
