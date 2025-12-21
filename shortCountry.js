const countries = [
  {
    name: 'Afghanistan',
    code: 'AF',
    currency: { code: 'AFN', name: 'Afghan afghani', symbol: '؋' },
    flag: 'https://restcountries.eu/data/afg.svg'
  },
  {
    name: 'Albania',
    code: 'AL',
    currency: { code: 'ALL', name: 'Albanian lek', symbol: 'L' },
    flag: 'https://restcountries.eu/data/alb.svg'
  },
  {
    name: 'Algeria',
    code: 'DZ',
    currency: { code: 'DZD', name: 'Algerian dinar', symbol: 'د.ج' },
    flag: 'https://restcountries.eu/data/dza.svg'
  },
  {
    name: 'American Samoa',
    code: 'AS',
    currency: { code: 'USD', name: 'United State Dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/asm.svg'
  },
  {
    name: 'Andorra',
    code: 'AD',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/and.svg'
  },
  {
    name: 'Angola',
    code: 'AO',
    currency: { code: 'AOA', name: 'Angolan kwanza', symbol: 'Kz' },
    flag: 'https://restcountries.eu/data/ago.svg'
  },
  {
    name: 'Anguilla',
    code: 'AI',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/aia.svg'
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/atg.svg'
  },
  {
    name: 'Argentina',
    code: 'AR',
    currency: { code: 'ARS', name: 'Argentine peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/arg.svg'
  },
  {
    name: 'Armenia',
    code: 'AM',
    currency: { code: 'AMD', name: 'Armenian dram', symbol: null },
    flag: 'https://restcountries.eu/data/arm.svg'
  },
  {
    name: 'Aruba',
    code: 'AW',
    currency: { code: 'AWG', name: 'Aruban florin', symbol: 'ƒ' },
    flag: 'https://restcountries.eu/data/abw.svg'
  },
  {
    name: 'Australia',
    code: 'AU',
    currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/aus.svg'
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    currency: { code: 'AZN', name: 'Azerbaijani manat', symbol: null },
    flag: 'https://restcountries.eu/data/aze.svg'
  },
  {
    name: 'Bahamas',
    code: 'BS',
    currency: { code: 'BSD', name: 'Bahamian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/bhs.svg'
  },
  {
    name: 'Bahrain',
    code: 'BH',
    currency: { code: 'BHD', name: 'Bahraini dinar', symbol: '.د.ب' },
    flag: 'https://restcountries.eu/data/bhr.svg'
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    currency: { code: 'BDT', name: 'Bangladeshi taka', symbol: '৳' },
    flag: 'https://restcountries.eu/data/bgd.svg'
  },
  {
    name: 'Barbados',
    code: 'BB',
    currency: { code: 'BBD', name: 'Barbadian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/brb.svg'
  },
  {
    name: 'Belarus',
    code: 'BY',
    currency: { code: 'BYN', name: 'New Belarusian ruble', symbol: 'Br' },
    flag: 'https://restcountries.eu/data/blr.svg'
  },
  {
    name: 'Belgium',
    code: 'BE',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/bel.svg'
  },
  {
    name: 'Belize',
    code: 'BZ',
    currency: { code: 'BZD', name: 'Belize dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/blz.svg'
  },
  {
    name: 'Benin',
    code: 'BJ',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/ben.svg'
  },
  {
    name: 'Bermuda',
    code: 'BM',
    currency: { code: 'BMD', name: 'Bermudian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/bmu.svg'
  },
  {
    name: 'Bhutan',
    code: 'BT',
    currency: { code: 'BTN', name: 'Bhutanese ngultrum', symbol: 'Nu.' },
    flag: 'https://restcountries.eu/data/btn.svg'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    code: 'BO',
    currency: { code: 'BOB', name: 'Bolivian boliviano', symbol: 'Bs.' },
    flag: 'https://restcountries.eu/data/bol.svg'
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    currency: {
      code: 'BAM',
      name: 'Bosnia and Herzegovina convertible mark',
      symbol: null
    },
    flag: 'https://restcountries.eu/data/bih.svg'
  },
  {
    name: 'Botswana',
    code: 'BW',
    currency: { code: 'BWP', name: 'Botswana pula', symbol: 'P' },
    flag: 'https://restcountries.eu/data/bwa.svg'
  },
  {
    name: 'Brazil',
    code: 'BR',
    currency: { code: 'BRL', name: 'Brazilian real', symbol: 'R$' },
    flag: 'https://restcountries.eu/data/bra.svg'
  },
  {
    name: 'British Indian Ocean Territory',
    code: 'IO',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/iot.svg'
  },
  {
    name: 'Virgin Islands (British)',
    code: 'VG',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/vgb.svg'
  },
  {
    name: 'Virgin Islands (U.S.)',
    code: 'VI',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/vir.svg'
  },
  {
    name: 'Brunei Darussalam',
    code: 'BN',
    currency: { code: 'BND', name: 'Brunei dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/brn.svg'
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    currency: { code: 'BGN', name: 'Bulgarian lev', symbol: 'лв' },
    flag: 'https://restcountries.eu/data/bgr.svg'
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/bfa.svg'
  },
  {
    name: 'Burundi',
    code: 'BI',
    currency: { code: 'BIF', name: 'Burundian franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/bdi.svg'
  },
  {
    name: 'Cambodia',
    code: 'KH',
    currency: { code: 'KHR', name: 'Cambodian riel', symbol: '៛' },
    flag: 'https://restcountries.eu/data/khm.svg'
  },
  {
    name: 'Cameroon',
    code: 'CM',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/cmr.svg'
  },
  {
    name: 'Canada',
    code: 'CA',
    currency: { code: 'CAD', name: 'Canadian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/can.svg'
  },
  {
    name: 'Cabo Verde',
    code: 'CV',
    currency: { code: 'CVE', name: 'Cape Verdean escudo', symbol: 'Esc' },
    flag: 'https://restcountries.eu/data/cpv.svg'
  },
  {
    name: 'Cayman Islands',
    code: 'KY',
    currency: { code: 'KYD', name: 'Cayman Islands dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/cym.svg'
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/caf.svg'
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/caf.svg'
  },
  {
    name: 'Chile',
    code: 'CL',
    currency: { code: 'CLP', name: 'Chilean peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/chl.svg'
  },
  {
    name: 'China',
    code: 'CN',
    currency: { code: 'CNY', name: 'Chinese yuan', symbol: '¥' },
    flag: 'https://restcountries.eu/data/chn.svg'
  },
  {
    name: 'Colombia',
    code: 'CO',
    currency: { code: 'COP', name: 'Colombian peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/col.svg'
  },
  {
    name: 'Comoros',
    code: 'KM',
    currency: { code: 'KMF', name: 'Comorian franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/com.svg'
  },
  {
    name: 'Congo',
    code: 'CG',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/cog.svg'
  },
  {
    name: 'Congo (Democratic Republic of the)',
    code: 'CD',
    currency: { code: 'CDF', name: 'Congolese franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/cod.svg'
  },
  {
    name: 'Cook Islands',
    code: 'CK',
    currency: { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/cok.svg'
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    currency: { code: 'CRC', name: 'Costa Rican colón', symbol: '₡' },
    flag: 'https://restcountries.eu/data/cri.svg'
  },
  {
    name: 'Croatia',
    code: 'HR',
    currency: { code: 'HRK', name: 'Croatian kuna', symbol: 'kn' },
    flag: 'https://restcountries.eu/data/hrv.svg'
  },
  {
    name: 'Cuba',
    code: 'CU',
    currency: { code: 'CUC', name: 'Cuban convertible peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/cub.svg'
  },
  {
    name: 'Cuba',
    code: 'CU',
    currency: { code: 'CUC', name: 'Cuban convertible peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/cub.svg'
  },
  {
    name: 'Cyprus',
    code: 'CY',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/cyp.svg'
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    currency: { code: 'CZK', name: 'Czech koruna', symbol: 'Kč' },
    flag: 'https://restcountries.eu/data/cze.svg'
  },
  {
    name: 'Denmark',
    code: 'DK',
    currency: { code: 'DKK', name: 'Danish krone', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/dnk.svg'
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    currency: { code: 'DJF', name: 'Djiboutian franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/dji.svg'
  },
  {
    name: 'Dominica',
    code: 'DM',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/dma.svg'
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    currency: { code: 'DOP', name: 'Dominican peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/dom.svg'
  },
  {
    name: 'Ecuador',
    code: 'EC',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/ecu.svg'
  },
  {
    name: 'Egypt',
    code: 'EG',
    currency: { code: 'EGP', name: 'Egyptian pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/egy.svg'
  },
  {
    name: 'El Salvador',
    code: 'SV',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/slv.svg'
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/gnq.svg'
  },
  {
    name: 'Eritrea',
    code: 'ER',
    currency: { code: 'ERN', name: 'Eritrean nakfa', symbol: 'Nfk' },
    flag: 'https://restcountries.eu/data/eri.svg'
  },
  {
    name: 'Estonia',
    code: 'EE',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/est.svg'
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    currency: { code: 'ETB', name: 'Ethiopian birr', symbol: 'Br' },
    flag: 'https://restcountries.eu/data/eth.svg'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    code: 'FK',
    currency: { code: 'FKP', name: 'Falkland Islands pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/flk.svg'
  },
  {
    name: 'Faroe Islands',
    code: 'FO',
    currency: { code: 'DKK', name: 'Danish krone', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/fro.svg'
  },
  {
    name: 'Fiji',
    code: 'FJ',
    currency: { code: 'FJD', name: 'Fijian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/fji.svg'
  },
  {
    name: 'Finland',
    code: 'FI',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/fin.svg'
  },
  {
    name: 'France',
    code: 'FR',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/fra.svg'
  },
  {
    name: 'French Guiana',
    code: 'GF',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/guf.svg'
  },
  {
    name: 'French Polynesia',
    code: 'PF',
    currency: { code: 'XPF', name: 'CFP franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/pyf.svg'
  },
  {
    name: 'Gabon',
    code: 'GA',
    currency: { code: 'XAF', name: 'Central African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/gab.svg'
  },
  {
    name: 'Gambia',
    code: 'GM',
    currency: { code: 'GMD', name: 'Gambian dalasi', symbol: 'D' },
    flag: 'https://restcountries.eu/data/gmb.svg'
  },
  {
    name: 'Georgia',
    code: 'GE',
    currency: { code: 'GEL', name: 'Georgian Lari', symbol: 'ლ' },
    flag: 'https://restcountries.eu/data/geo.svg'
  },
  {
    name: 'Germany',
    code: 'DE',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/deu.svg'
  },
  {
    name: 'Ghana',
    code: 'GH',
    currency: { code: 'GHS', name: 'Ghanaian cedi', symbol: '₵' },
    flag: 'https://restcountries.eu/data/gha.svg'
  },
  {
    name: 'Gibraltar',
    code: 'GI',
    currency: { code: 'GIP', name: 'Gibraltar pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/gib.svg'
  },
  {
    name: 'Greece',
    code: 'GR',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/grc.svg'
  },
  {
    name: 'Greenland',
    code: 'GL',
    currency: { code: 'DKK', name: 'Danish krone', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/grl.svg'
  },
  {
    name: 'Grenada',
    code: 'GD',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/grd.svg'
  },
  {
    name: 'Guadeloupe',
    code: 'GP',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/glp.svg'
  },
  {
    name: 'Guam',
    code: 'GU',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/gum.svg'
  },
  {
    name: 'Guatemala',
    code: 'GT',
    currency: { code: 'GTQ', name: 'Guatemalan quetzal', symbol: 'Q' },
    flag: 'https://restcountries.eu/data/gtm.svg'
  },
  {
    name: 'Guinea',
    code: 'GN',
    currency: { code: 'GNF', name: 'Guinean franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/gin.svg'
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/gnb.svg'
  },
  {
    name: 'Guyana',
    code: 'GY',
    currency: { code: 'GYD', name: 'Guyanese dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/guy.svg'
  },
  {
    name: 'Haiti',
    code: 'HT',
    currency: { code: 'HTG', name: 'Haitian gourde', symbol: 'G' },
    flag: 'https://restcountries.eu/data/hti.svg'
  },
  {
    name: 'Holy See',
    code: 'VA',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/vat.svg'
  },
  {
    name: 'Honduras',
    code: 'HN',
    currency: { code: 'HNL', name: 'Honduran lempira', symbol: 'L' },
    flag: 'https://restcountries.eu/data/hnd.svg'
  },
  {
    name: 'Hong Kong',
    code: 'HK',
    currency: { code: 'HKD', name: 'Hong Kong dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/hkg.svg'
  },
  {
    name: 'Hungary',
    code: 'HU',
    currency: { code: 'HUF', name: 'Hungarian forint', symbol: 'Ft' },
    flag: 'https://restcountries.eu/data/hun.svg'
  },
  {
    name: 'Iceland',
    code: 'IS',
    currency: { code: 'ISK', name: 'Icelandic króna', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/isl.svg'
  },
  {
    name: 'India',
    code: 'IN',
    currency: { code: 'INR', name: 'Indian rupee', symbol: '₹' },
    flag: 'https://restcountries.eu/data/ind.svg'
  },
  {
    name: 'Indonesia',
    code: 'ID',
    currency: { code: 'IDR', name: 'Indonesian rupiah', symbol: 'Rp' },
    flag: 'https://restcountries.eu/data/idn.svg'
  },
  {
    name: "Côte d'Ivoire",
    code: 'CI',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/civ.svg'
  },
  {
    name: 'Iran (Islamic Republic of)',
    code: 'IR',
    currency: { code: 'IRR', name: 'Iranian rial', symbol: '﷼' },
    flag: 'https://restcountries.eu/data/irn.svg'
  },
  {
    name: 'Iraq',
    code: 'IQ',
    currency: { code: 'IQD', name: 'Iraqi dinar', symbol: 'ع.د' },
    flag: 'https://restcountries.eu/data/irq.svg'
  },
  {
    name: 'Ireland',
    code: 'IE',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/irl.svg'
  },
  {
    name: 'Israel',
    code: 'IL',
    currency: { code: 'ILS', name: 'Israeli new shekel', symbol: '₪' },
    flag: 'https://restcountries.eu/data/isr.svg'
  },
















  {
    name: 'Italy',
    code: 'IT',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/ita.svg'
  },
  {
    name: 'Jamaica',
    code: 'JM',
    currency: { code: 'JMD', name: 'Jamaican dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/jam.svg'
  },
  {
    name: 'Japan',
    code: 'JP',
    currency: { code: 'JPY', name: 'Japanese yen', symbol: '¥' },
    flag: 'https://restcountries.eu/data/jpn.svg'
  },
  {
    name: 'Jordan',
    code: 'JO',
    currency: { code: 'JOD', name: 'Jordanian dinar', symbol: 'د.ا' },
    flag: 'https://restcountries.eu/data/jor.svg'
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    currency: { code: 'KZT', name: 'Kazakhstani tenge', symbol: null },
    flag: 'https://restcountries.eu/data/kaz.svg'
  },
  {
    name: 'Kenya',
    code: 'KE',
    currency: { code: 'KES', name: 'Kenyan shilling', symbol: 'Sh' },
    flag: 'https://restcountries.eu/data/ken.svg'
  },
  {
    name: 'Kiribati',
    code: 'KI',
    currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/kir.svg'
  },
  {
    name: 'Kuwait',
    code: 'KW',
    currency: { code: 'KWD', name: 'Kuwaiti dinar', symbol: 'د.ك' },
    flag: 'https://restcountries.eu/data/kwt.svg'
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    currency: { code: 'KGS', name: 'Kyrgyzstani som', symbol: 'с' },
    flag: 'https://restcountries.eu/data/kgz.svg'
  },
  {
    name: "Lao People's Democratic Republic",
    code: 'LA',
    currency: { code: 'LAK', name: 'Lao kip', symbol: '₭' },
    flag: 'https://restcountries.eu/data/lao.svg'
  },
  {
    name: 'Latvia',
    code: 'LV',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/lva.svg'
  },
  {
    name: 'Lebanon',
    code: 'LB',
    currency: { code: 'LBP', name: 'Lebanese pound', symbol: 'ل.ل' },
    flag: 'https://restcountries.eu/data/lbn.svg'
  },
  {
    name: 'Lesotho',
    code: 'LS',
    currency: { code: 'LSL', name: 'Lesotho loti', symbol: 'L' },
    flag: 'https://restcountries.eu/data/lso.svg'
  },
  {
    name: 'Liberia',
    code: 'LR',
    currency: { code: 'LRD', name: 'Liberian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/lbr.svg'
  },
  {
    name: 'Libya',
    code: 'LY',
    currency: { code: 'LYD', name: 'Libyan dinar', symbol: 'ل.د' },
    flag: 'https://restcountries.eu/data/lby.svg'
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    currency: { code: 'CHF', name: 'Swiss franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/lie.svg'
  },
  {
    name: 'Lithuania',
    code: 'LT',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/ltu.svg'
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/lux.svg'
  },
  {
    name: 'Macao',
    code: 'MO',
    currency: { code: 'MOP', name: 'Macanese pataca', symbol: 'P' },
    flag: 'https://restcountries.eu/data/mac.svg'
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    code: 'MK',
    currency: { code: 'MKD', name: 'Macedonian denar', symbol: 'ден' },
    flag: 'https://restcountries.eu/data/mkd.svg'
  },
  {
    name: 'Madagascar',
    code: 'MG',
    currency: { code: 'MGA', name: 'Malagasy ariary', symbol: 'Ar' },
    flag: 'https://restcountries.eu/data/mdg.svg'
  },
  {
    name: 'Malawi',
    code: 'MW',
    currency: { code: 'MWK', name: 'Malawian kwacha', symbol: 'MK' },
    flag: 'https://restcountries.eu/data/mwi.svg'
  },
  {
    name: 'Malaysia',
    code: 'MY',
    currency: { code: 'MYR', name: 'Malaysian ringgit', symbol: 'RM' },
    flag: 'https://restcountries.eu/data/mys.svg'
  },
  {
    name: 'Maldives',
    code: 'MV',
    currency: { code: 'MVR', name: 'Maldivian rufiyaa', symbol: '.ރ' },
    flag: 'https://restcountries.eu/data/mdv.svg'
  },
  {
    name: 'Mali',
    code: 'ML',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/mli.svg'
  },
  {
    name: 'Malta',
    code: 'MT',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/mlt.svg'
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/mhl.svg'
  },
  {
    name: 'Martinique',
    code: 'MQ',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/mtq.svg'
  },
  {
    name: 'Mauritania',
    code: 'MR',
    currency: { code: 'MRO', name: 'Mauritanian ouguiya', symbol: 'UM' },
    flag: 'https://restcountries.eu/data/mrt.svg'
  },
  {
    name: 'Mauritius',
    code: 'MU',
    currency: { code: 'MUR', name: 'Mauritian rupee', symbol: '₨' },
    flag: 'https://restcountries.eu/data/mus.svg'
  },
  {
    name: 'Mayotte',
    code: 'YT',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/myt.svg'
  },
  {
    name: 'Mexico',
    code: 'MX',
    currency: { code: 'MXN', name: 'Mexican peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/mex.svg'
  },
  {
    name: 'Micronesia (Federated States of)',
    code: 'FM',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/fsm.svg'
  },
  {
    name: 'Moldova (Republic of)',
    code: 'MD',
    currency: { code: 'MDL', name: 'Moldovan leu', symbol: 'L' },
    flag: 'https://restcountries.eu/data/mda.svg'
  },
  {
    name: 'Monaco',
    code: 'MC',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/mco.svg'
  },
  {
    name: 'Mongolia',
    code: 'MN',
    currency: { code: 'MNT', name: 'Mongolian tögrög', symbol: '₮' },
    flag: 'https://restcountries.eu/data/mng.svg'
  },
  {
    name: 'Montenegro',
    code: 'ME',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/mne.svg'
  },
  {
    name: 'Montserrat',
    code: 'MS',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/msr.svg'
  },
  {
    name: 'Morocco',
    code: 'MA',
    currency: { code: 'MAD', name: 'Moroccan dirham', symbol: 'د.م.' },
    flag: 'https://restcountries.eu/data/mar.svg'
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    currency: { code: 'MZN', name: 'Mozambican metical', symbol: 'MT' },
    flag: 'https://restcountries.eu/data/moz.svg'
  },
  {
    name: 'Myanmar',
    code: 'MM',
    currency: { code: 'MMK', name: 'Burmese kyat', symbol: 'Ks' },
    flag: 'https://restcountries.eu/data/mmr.svg'
  },
  {
    name: 'Namibia',
    code: 'NA',
    currency: { code: 'NAD', name: 'Namibian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/nam.svg'
  },
  {
    name: 'Nauru',
    code: 'NR',
    currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/nru.svg'
  },
  {
    name: 'Nepal',
    code: 'NP',
    currency: { code: 'NPR', name: 'Nepalese rupee', symbol: '₨' },
    flag: 'https://restcountries.eu/data/npl.svg'
  },
  {
    name: 'Netherlands',
    code: 'NL',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/nld.svg'
  },
  {
    name: 'New Caledonia',
    code: 'NC',
    currency: { code: 'XPF', name: 'CFP franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/ncl.svg'
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    currency: { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/nzl.svg'
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    currency: { code: 'NIO', name: 'Nicaraguan córdoba', symbol: 'C$' },
    flag: 'https://restcountries.eu/data/nic.svg'
  },
  {
    name: 'Niger',
    code: 'NE',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/ner.svg'
  },
  {
    name: 'Nigeria',
    code: 'NG',
    currency: { code: 'NGN', name: 'Nigerian naira', symbol: '₦' },
    flag: 'https://restcountries.eu/data/nga.svg'
  },
  {
    name: 'Niue',
    code: 'NU',
    currency: { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/niu.svg'
  },
  {
    name: 'Norfolk Island',
    code: 'NF',
    currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/nfk.svg'
  },
  {
    name: "Korea (Democratic People's Republic of)",
    code: 'KP',
    currency: { code: 'KPW', name: 'North Korean won', symbol: '₩' },
    flag: 'https://restcountries.eu/data/prk.svg'
  },
  {
    name: 'Northern Mariana Islands',
    code: 'MP',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/mnp.svg'
  },
  {
    name: 'Norway',
    code: 'NO',
    currency: { code: 'NOK', name: 'Norwegian krone', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/nor.svg'
  },
  {
    name: 'Oman',
    code: 'OM',
    currency: { code: 'OMR', name: 'Omani rial', symbol: 'ر.ع.' },
    flag: 'https://restcountries.eu/data/omn.svg'
  },
  {
    name: 'Pakistan',
    code: 'PK',
    currency: { code: 'PKR', name: 'Pakistani rupee', symbol: '₨' },
    flag: 'https://restcountries.eu/data/pak.svg'
  },
  {
    name: 'Palau',
    code: 'PW',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/plw.svg'
  },
  {
    name: 'Palestine, State of',
    code: 'PS',
    currency: { code: 'ILS', name: 'Israeli new sheqel', symbol: '₪' },
    flag: 'https://restcountries.eu/data/pse.svg'
  },
  {
    name: 'Panama',
    code: 'PA',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/pan.svg'
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    currency: { code: 'PGK', name: 'Papua New Guinean kina', symbol: 'K' },
    flag: 'https://restcountries.eu/data/png.svg'
  },
  {
    name: 'Paraguay',
    code: 'PY',
    currency: { code: 'PYG', name: 'Paraguayan guaraní', symbol: '₲' },
    flag: 'https://restcountries.eu/data/pry.svg'
  },
  {
    name: 'Peru',
    code: 'PE',
    currency: { code: 'PEN', name: 'Peruvian sol', symbol: 'S/.' },
    flag: 'https://restcountries.eu/data/per.svg'
  },
  {
    name: 'Philippines',
    code: 'PH',
    currency: { code: 'PHP', name: 'Philippine peso', symbol: '₱' },
    flag: 'https://restcountries.eu/data/phl.svg'
  },
  {
    name: 'Poland',
    code: 'PL',
    currency: { code: 'PLN', name: 'Polish złoty', symbol: 'zł' },
    flag: 'https://restcountries.eu/data/pol.svg'
  },
  {
    name: 'Portugal',
    code: 'PT',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/prt.svg'
  },
  {
    name: 'Puerto Rico',
    code: 'PR',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/pri.svg'
  },
  {
    name: 'Qatar',
    code: 'QA',
    currency: { code: 'QAR', name: 'Qatari riyal', symbol: 'ر.ق' },
    flag: 'https://restcountries.eu/data/qat.svg'
  },
  {
    name: 'Republic of Kosovo',
    code: 'XK',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/kos.svg'
  },
  {
    name: 'Réunion',
    code: 'RE',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/reu.svg'
  },
  {
    name: 'Romania',
    code: 'RO',
    currency: { code: 'RON', name: 'Romanian leu', symbol: 'lei' },
    flag: 'https://restcountries.eu/data/rou.svg'
  },
  {
    name: 'Russian Federation',
    code: 'RU',
    currency: { code: 'RUB', name: 'Russian ruble', symbol: '₽' },
    flag: 'https://restcountries.eu/data/rus.svg'
  },
  {
    name: 'Rwanda',
    code: 'RW',
    currency: { code: 'RWF', name: 'Rwandan franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/rwa.svg'
  },
  {
    name: 'Saint Barthélemy',
    code: 'BL',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/blm.svg'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    code: 'SH',
    currency: { code: 'SHP', name: 'Saint Helena pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/shn.svg'
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/kna.svg'
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/lca.svg'
  },
  {
    name: 'Saint Martin (French part)',
    code: 'MF',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/maf.svg'
  },
  {
    name: 'Saint Pierre and Miquelon',
    code: 'PM',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/spm.svg'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    currency: { code: 'XCD', name: 'East Caribbean dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/vct.svg'
  },
  {
    name: 'Samoa',
    code: 'WS',
    currency: { code: 'WST', name: 'Samoan tālā', symbol: 'T' },
    flag: 'https://restcountries.eu/data/wsm.svg'
  },
  {
    name: 'San Marino',
    code: 'SM',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/smr.svg'
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
    currency: { code: 'STD', name: 'São Tomé and Príncipe dobra', symbol: 'Db' },
    flag: 'https://restcountries.eu/data/stp.svg'
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    currency: { code: 'SAR', name: 'Saudi riyal', symbol: 'ر.س' },
    flag: 'https://restcountries.eu/data/sau.svg'
  },
  {
    name: 'Senegal',
    code: 'SN',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/sen.svg'
  },
  {
    name: 'Serbia',
    code: 'RS',
    currency: { code: 'RSD', name: 'Serbian dinar', symbol: 'дин.' },
    flag: 'https://restcountries.eu/data/srb.svg'
  },
  {
    name: 'Seychelles',
    code: 'SC',
    currency: { code: 'SCR', name: 'Seychellois rupee', symbol: '₨' },
    flag: 'https://restcountries.eu/data/syc.svg'
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    currency: { code: 'SLL', name: 'Sierra Leonean leone', symbol: 'Le' },
    flag: 'https://restcountries.eu/data/sle.svg'
  },
  {
    name: 'Singapore',
    code: 'SG',
    currency: { code: 'SGD', name: 'Singapore dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/sgp.svg'
  },
  {
    name: 'Singapore',
    code: 'SG',
    currency: { code: 'SGD', name: 'Singapore dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/sgp.svg'
  },
  {
    name: 'Slovakia',
    code: 'SK',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/svk.svg'
  },
  {
    name: 'Slovenia',
    code: 'SI',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/svn.svg'
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    currency: { code: 'SBD', name: 'Solomon Islands dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/slb.svg'
  },
  {
    name: 'Somalia',
    code: 'SO',
    currency: { code: 'SOS', name: 'Somali shilling', symbol: 'Sh' },
    flag: 'https://restcountries.eu/data/som.svg'
  },
  {
    name: 'South Africa',
    code: 'ZA',
    currency: { code: 'ZAR', name: 'South African rand', symbol: 'R' },
    flag: 'https://restcountries.eu/data/zaf.svg'
  },
  {
    name: 'Korea (Republic of)',
    code: 'KR',
    currency: { code: 'KRW', name: 'South Korean won', symbol: '₩' },
    flag: 'https://restcountries.eu/data/kor.svg'
  },
  {
    name: 'Spain',
    code: 'ES',
    currency: { code: 'EUR', name: 'Euro', symbol: '€' },
    flag: 'https://restcountries.eu/data/esp.svg'
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    currency: { code: 'LKR', name: 'Sri Lankan rupee', symbol: 'Rs' },
    flag: 'https://restcountries.eu/data/lka.svg'
  },
  {
    name: 'Sudan',
    code: 'SD',
    currency: { code: 'SDG', name: 'Sudanese pound', symbol: 'ج.س.' },
    flag: 'https://restcountries.eu/data/sdn.svg'
  },
  {
    name: 'Suriname',
    code: 'SR',
    currency: { code: 'SRD', name: 'Surinamese dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/sur.svg'
  },









  






  {
    name: 'Swaziland',
    code: 'SZ',
    currency: { code: 'SZL', name: 'Swazi lilangeni', symbol: 'L' },
    flag: 'https://restcountries.eu/data/swz.svg'
  },
  {
    name: 'Sweden',
    code: 'SE',
    currency: { code: 'SEK', name: 'Swedish krona', symbol: 'kr' },
    flag: 'https://restcountries.eu/data/swe.svg'
  },
  {
    name: 'Switzerland',
    code: 'CH',
    currency: { code: 'CHF', name: 'Swiss franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/che.svg'
  },
  {
    name: 'Syrian Arab Republic',
    code: 'SY',
    currency: { code: 'SYP', name: 'Syrian pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/syr.svg'
  },
  {
    name: 'Taiwan',
    code: 'TW',
    currency: { code: 'TWD', name: 'New Taiwan dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/twn.svg'
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    currency: { code: 'TJS', name: 'Tajikistani somoni', symbol: 'ЅМ' },
    flag: 'https://restcountries.eu/data/tjk.svg'
  },
  {
    name: 'Tanzania, United Republic of',
    code: 'TZ',
    currency: { code: 'TZS', name: 'Tanzanian shilling', symbol: 'Sh' },
    flag: 'https://restcountries.eu/data/tza.svg'
  },
  {
    name: 'Thailand',
    code: 'TH',
    currency: { code: 'THB', name: 'Thai baht', symbol: '฿' },
    flag: 'https://restcountries.eu/data/tha.svg'
  },
  {
    name: 'Timor-Leste',
    code: 'TL',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/tls.svg'
  },
  {
    name: 'Togo',
    code: 'TG',
    currency: { code: 'XOF', name: 'West African CFA franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/tgo.svg'
  },
  {
    name: 'Tokelau',
    code: 'TK',
    currency: { code: 'NZD', name: 'New Zealand dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/tkl.svg'
  },
  {
    name: 'Tonga',
    code: 'TO',
    currency: { code: 'TOP', name: 'Tongan paʻanga', symbol: 'T$' },
    flag: 'https://restcountries.eu/data/ton.svg'
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
    currency: { code: 'TTD', name: 'Trinidad and Tobago dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/tto.svg'
  },
  {
    name: 'Tunisia',
    code: 'TN',
    currency: { code: 'TND', name: 'Tunisian dinar', symbol: 'د.ت' },
    flag: 'https://restcountries.eu/data/tun.svg'
  },
  {
    name: 'Turkey',
    code: 'TR',
    currency: { code: 'TRY', name: 'Turkish lira', symbol: null },
    flag: 'https://restcountries.eu/data/tur.svg'
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    currency: { code: 'TMT', name: 'Turkmenistan manat', symbol: 'm' },
    flag: 'https://restcountries.eu/data/tkm.svg'
  },
  {
    name: 'Turks and Caicos Islands',
    code: 'TC',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/tca.svg'
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/tuv.svg'
  },
  {
    name: 'Uganda',
    code: 'UG',
    currency: { code: 'UGX', name: 'Ugandan shilling', symbol: 'Sh' },
    flag: 'https://restcountries.eu/data/uga.svg'
  },
  {
    name: 'Ukraine',
    code: 'UA',
    currency: { code: 'UAH', name: 'Ukrainian hryvnia', symbol: '₴' },
    flag: 'https://restcountries.eu/data/ukr.svg'
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    currency: { code: 'AED', name: 'United Arab Emirates dirham', symbol: 'د.إ' },
    flag: 'https://restcountries.eu/data/are.svg'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    code: 'GB',
    currency: { code: 'GBP', name: 'British pound', symbol: '£' },
    flag: 'https://restcountries.eu/data/gbr.svg'
  },
  {
    name: 'United States of America',
    code: 'US',
    currency: { code: 'USD', name: 'United States dollar', symbol: '$' },
    flag: 'https://restcountries.eu/data/usa.svg'
  },
  {
    name: 'Uruguay',
    code: 'UY',
    currency: { code: 'UYU', name: 'Uruguayan peso', symbol: '$' },
    flag: 'https://restcountries.eu/data/ury.svg'
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    currency: { code: 'UZS', name: "Uzbekistani so'm", symbol: null },
    flag: 'https://restcountries.eu/data/uzb.svg'
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    currency: { code: 'VUV', name: 'Vanuatu vatu', symbol: 'Vt' },
    flag: 'https://restcountries.eu/data/vut.svg'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    code: 'VE',
    currency: { code: 'VEF', name: 'Venezuelan bolívar', symbol: 'Bs F' },
    flag: 'https://restcountries.eu/data/ven.svg'
  },
  {
    name: 'Viet Nam',
    code: 'VN',
    currency: { code: 'VND', name: 'Vietnamese đồng', symbol: '₫' },
    flag: 'https://restcountries.eu/data/vnm.svg'
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
    currency: { code: 'XPF', name: 'CFP franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/wlf.svg'
  },
  {
    name: 'Wallis and Futuna',
    code: 'WF',
    currency: { code: 'XPF', name: 'CFP franc', symbol: 'Fr' },
    flag: 'https://restcountries.eu/data/wlf.svg'
  },
  {
    name: 'Yemen',
    code: 'YE',
    currency: { code: 'YER', name: 'Yemeni rial', symbol: '﷼' },
    flag: 'https://restcountries.eu/data/yem.svg'
  },
  {
    name: 'Zambia',
    code: 'ZM',
    currency: { code: 'ZMW', name: 'Zambian kwacha', symbol: 'ZK' },
    flag: 'https://restcountries.eu/data/zmb.svg'
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    currency: { code: 'BWP', name: 'Botswana pula', symbol: 'P' },
    flag: 'https://restcountries.eu/data/zwe.svg'
  }
];