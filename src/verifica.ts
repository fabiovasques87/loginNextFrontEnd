import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import jwt from 'jsonwebtoken';



export const verifica = () => {

  const token = localStorage.getItem('token');

  return token ? jwt.decode(token) : null;

 };



