import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

type Profile = {
  id: string;
  name: string;
  avatar: string;
};

export const GlobalContext = createContext({} as Profile);

const ProfileContext = () => {
  useEffect(() => {
    api.get(`${repositories}`).then((res) => {
      setRepositories(res.data);
    });
  }, []);

  return <div></div>;
};

export default ProfileContext;
