import { TripInterface } from 'data/@types/tripInterface';
import { useState } from 'react';
import { ApiService } from '@services/ApiService';
import { PathInterface } from 'data/@types/pathInterface';

var addrA = 'http://26.183.229.122:52000/';
var addrB = 'http://26.183.229.122:53000/';
var addrC = 'http://26.183.229.122:54000/';

export default function useIndex() {
  const [company, setCompany] = useState(''),
    [erroCompany, setErroCompany] = useState(''),
    [hasCompany, setHasCompany] = useState(false),
    [trips, setTrips] = useState([] as TripInterface[]),
    [loadBuy, setLoadBuy] = useState(false),
    [modalFlag, setModalFlag] = useState(false),
    [tripSelectedInfo, setTripSelectedInfo] = useState<TripInterface>(),
    [origin, setOrigin] = useState(''),
    [destination, setDestination] = useState(''),
    [loadSearch, setLoadSearch] = useState(false),
    [tripsSearch, setTripsSearch] = useState([] as TripInterface[]),
    [erroSearch, setErroSearch] = useState(''),
    [success, setSuccess] = useState('');

  function validateCompany(company: string) {
    company = company.toUpperCase();
    setCompany(company);
    if (company === 'A' || company === 'B' || company === 'C') {
      setErroCompany('');
    } else if (company) {
      setErroCompany('Informe uma companhia válida.');
    } else {
      setErroCompany('');
    }
  }

  async function getSugestions() {
    let address = '';
    setHasCompany(true);
    if (company === 'A') {
      address = addrA;
    } else if (company === 'B') {
      address = addrB;
    } else {
      address = addrC;
    }
    try {
      const { data } = await ApiService.get<TripInterface[]>(
        address + `${company}/routes`
      );
      setTrips(data);
    } catch (e) {
      console.log(e);
    }
    console.log(address + `${company}/routes`);
  }

  function openModal(trip: TripInterface) {
    setModalFlag(true);
    setTripSelectedInfo(trip);
  }
  function closeModal() {
    setModalFlag(false);
  }

  async function buyTrip(trip: TripInterface) {
    setErroSearch('');
    setSuccess('');
    setLoadBuy(true);
    let address = '';
    if (company === 'A') {
      address = addrA;
    } else if (company === 'B') {
      address = addrB;
    } else {
      address = addrC;
    }
    try {
      const { data } = await ApiService.post(address + `${company}/buy`, trip);

      setSuccess(data[0].message);
    } catch (e) {
      setErroSearch('Não foi possível efetuar a compra');
    }
    setLoadBuy(false);
    getSugestions();
  }

  async function searchTrip(origin: string, destination: string) {
    setLoadSearch(true);
    setErroSearch('');
    setSuccess('');
    let address = '';
    if (company === 'A') {
      address = addrA;
    } else if (company === 'B') {
      address = addrB;
    } else {
      address = addrC;
    }
    try {
      const { data } = await ApiService.get<TripInterface[]>(
        address + `${company}/${origin}/${destination}`
      );
      if (data.length === 0) {
        setErroSearch('Não foi encontrado a viagem informada.');
      } else {
        setErroSearch('');
      }
      setTripsSearch(data);
    } catch (e) {
      setErroSearch('Erro inesperado');
    }
    setLoadSearch(false);
    getSugestions();
  }
  return {
    company,
    validateCompany,
    erroCompany,
    hasCompany,
    setHasCompany,
    getSugestions,
    trips,
    loadBuy,
    buyTrip,
    modalFlag,
    tripSelectedInfo,
    openModal,
    closeModal,
    origin,
    setOrigin,
    destination,
    setDestination,
    searchTrip,
    loadSearch,
    tripsSearch,
    erroSearch,
    success,
  };
}
