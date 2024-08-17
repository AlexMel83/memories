import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { useLocalStorage } from '@vueuse/core';

interface SocialLink {
  id: number;
  title: string;
  src: string;
  link: string;
}

interface BookSpace {
  id: number;
  price: string;
  amount: string;
}

interface User {
  id: number;
  email: string;
  facabook_id: string;
  google_id: string;
  name: string;
  surname: string;
  phone: string;
  picture: string;
  role: string;
  social_login: boolean;
  isactivated: boolean;
  created_at: string;
  updated_at: string;
}

interface Advantage {
  id: number;
  name: string;
  description: string;
  icon: string;
}
export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: '',
    isLoading: false,
    isAuthed: false,
    isMenuOpen: false,
    userRole: '',
    userData: null,
    authUser: {} as User,
    activeTabAuthUserMenu: '',
    menuOpen: false,
    manager: {} as User | null,
    allAdvantages: [] as Advantage[],
    currentBookSpace: {} as BookSpace,
    social: [
      { id: 1, title: 'telegram', src: '../telegram.png', link: '' },
      { id: 2, title: 'viber', src: '../viber.png', link: '' },
      { id: 3, title: 'instagram', src: '../instagram.png', link: '' },
      { id: 4, title: 'facebook', src: '../facebook.png', link: '' },
    ] as SocialLink[],
    favoriteSpaces: [] as BookSpace[],
    initialEmail: '',
    userId: useLocalStorage('userId', null),
    email: useLocalStorage('email', ''),
  }),

  actions: {
    setInitialEmail(email: string) {
      this.initialEmail = email;
    },

    setName(ob: Partial<typeof this.$state>) {
      Object.assign(this, ob);
      this.isAuthed = true;
    },

    setRole(role: string) {
      this.userRole = role;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userRole', role);
      }
    },

    setAccessToken(token: string) {
      this.accessToken = token;
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', token);
      }
    },

    async logOut() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api.post('/logout');
        if (response && typeof window !== 'undefined') {
          localStorage.clear();
          this.authUser = {} as User;
          this.userRole = 'unknown';
          this.isAuthed = false;
          this.accessToken = '';
          localStorage.removeItem('access_token');
          localStorage.removeItem('userData');
        }
      } catch (error) {
        console.log(error);
      }
    },

    getManagerData(data: User) {
      this.manager = data;
      if (typeof window !== 'undefined') {
        localStorage.setItem('managerData', JSON.stringify(data));
      }
    },

    getUserData(data: User) {
      this.authUser = data;
      this.isAuthed = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(data));
      }
    },

    getAllAdvantages(data: Advantage[]) {
      this.allAdvantages = data;
    },

    setManagerData(data: User) {
      this.manager = data;
    },

    setUserData(userData: User | string) {
      if (typeof userData === 'string') {
        this.authUser = JSON.parse(userData);
      }
      if (typeof userData === 'object') {
        this.authUser = { ...userData };
      }
    },

    setAllAdvantages(data: Advantage[]) {
      this.allAdvantages = data;
      if (typeof window !== 'undefined') {
        localStorage.setItem('allAdvantages', JSON.stringify(data));
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    addToFavorites(space: BookSpace) {
      this.favoriteSpaces.push(space);
    },

    removeFromFavorites(spaceId: number) {
      this.favoriteSpaces = this.favoriteSpaces.filter(
        (space) => space.id !== spaceId,
      );
    },
    initializeStore() {
      if (process.client) {
        this.userRole = localStorage.getItem('userRole') || '';
        const userData = localStorage.getItem('userData');
        if (userData) {
          this.userData = JSON.parse(userData);
          this.isAuthed = true;
        }
      }
    },
  },
});
