import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';

interface SocialLink {
  id: number;
  title: string;
  src: string;
  link: string;
}

interface BookSpace {
  id: string;
  price: string;
  amount: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('access_token') || '',
    isLoading: false,
    isAuthed: false,
    isMenuOpen: false,
    userRole: '',
    userData: null,
    authUser: {} as any,
    activeTabAuthUserMenu: '',
    menuOpen: false,
    manager: null as any,
    user: null as any,
    allAdvantages: [] as any[],
    currentBookSpace: {
      id: '',
      price: '',
      amount: '',
    } as BookSpace,
    social: [
      { id: 1, title: 'telegram', src: '../telegram.png', link: '' },
      { id: 2, title: 'viber', src: '../viber.png', link: '' },
      { id: 3, title: 'instagram', src: '../instagram.png', link: '' },
      { id: 4, title: 'facebook', src: '../facebook.png', link: '' },
    ] as SocialLink[],
    favoriteSpaces: [] as any[],
  }),

  actions: {
    setName(ob: Partial<typeof this.$state>) {
      Object.assign(this, ob);
      this.isAuthed = true;
    },

    setRole(role: string) {
      this.userRole = role;
      if (process.client) {
        localStorage.setItem('userRole', role);
      }
    },

    setAccessToken(token: string) {
      this.accessToken = token;
      if (process.client) {
        localStorage.setItem('access_token', token);
      }
    },

    async logOut() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api.post('/logout');
        if (response) {
          localStorage.clear();
          this.authUser = {};
          this.userRole = 'unknown';
          this.isAuthed = false;
          this.accessToken = '';
          localStorage.removeItem('access_token');
        }
      } catch (error) {
        console.log(error);
      }
    },

    getManagerData(data: any) {
      this.manager = data;
      localStorage.setItem('managerData', JSON.stringify(data));
    },

    getUserData(data: any) {
      this.authUser = data;
      this.isAuthed = true;
      if (process.client) {
        localStorage.setItem('userData', JSON.stringify(data));
      }
    },

    getAllAdvantages(data: any[]) {
      this.allAdvantages = data;
    },

    setManagerData(data: any) {
      this.manager = data;
    },

    setUserData(data: any) {
      this.authUser = data;
    },

    setAllAdvantages(data: any[]) {
      this.allAdvantages = data;
      if (process.client) {
        localStorage.setItem('allAdvantages', JSON.stringify(data));
      }
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    addToFavorites(space: any) {
      this.favoriteSpaces.push(space);
    },

    removeFromFavorites(spaceId: string) {
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
