// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const products = [
    {
    "manufacturer": {
    "name": "Camisetas Manolita, S.A.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cbf3045fc297f93a360a",
    "title": "Morning Code",
    "image": "https://srv.latostadora.com/image/codigo_de_la_manana--id:540a0c92-381b-43e4-80ad-f11580d55b27;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 20.5,
    "id": "productId-0000011",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cc6e045fc297f93a3610",
    "title": "Why works?",
    "image": "https://srv.latostadora.com/image/el_codigo_del_programador_funciona_por_--id:02294e51-22dd-47ca-bb68-821637c70156;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 19.5,
    "id": "productId-0000013",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cc97045fc297f93a3613",
    "title": "Devops Ninja",
    "image": "https://srv.latostadora.com/image/devops_ninja_white--id:abff87f0-3618-430c-a607-28e57a7cc269;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 17.9,
    "id": "productId-0000014",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162ccb6045fc297f93a3616",
    "title": "Docker Kill",
    "image": "https://srv.latostadora.com/image/docker_kill--id:fa5318a9-b0ae-4a6c-a950-088628573aba;s:H_A27;b:f2f2f2;w:520;f:f.jpg",
    "rating": 2,
    "price": 18.9,
    "id": "productId-0000015",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Camisetas seta, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162ccd1045fc297f93a3619",
    "title": "Ready",
    "image": "https://srv.latostadora.com/image/ready_basic_amstrad_cpc--id:725d1666-d7ba-44e2-9fa4-a9de0bc105df;s:H_A22;b:f2f2f2;w:520;f:f.jpg",
    "rating": 2,
    "price": 18.9,
    "id": "productId-0000016",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162ccf5045fc297f93a361c",
    "title": "Hate CSS (me too)",
    "image": "https://srv.latostadora.com/image/i_hate_css--id:544793ee-ea68-46a3-aa17-75f94230b912;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 15.9,
    "id": "productId-0000017",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cd38045fc297f93a3623",
    "title": "Dev life",
    "image": "https://srv.latostadora.com/image/eat_coffee_code_repeat_light--id:efc76285-ecb5-47a1-a85b-f07e85d911fd;s:H_A20;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 15.9,
    "id": "productId-0000018",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cd56045fc297f93a3626",
    "title": "Senior developer",
    "image": "https://srv.latostadora.com/image/senor_developer--id:66f3653b-388b-405c-9248-1cf75de474e4;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 17.9,
    "id": "productId-0000019",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Code dress, S.L.",
    "cif": "B10458999",
    "address": "Pol. Campero - parc. 14-b"
    },
    "_id": "6162cd7d045fc297f93a3629",
    "title": "Coding if",
    "image": "https://srv.latostadora.com/image/regalo_divertido_para_auriculares_progr--id:8d013c90-b794-4c35-969f-b9036143a9ea;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 20.5,
    "id": "productId-0000020",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cdcb045fc297f93a362c",
    "title": "!false is true",
    "image": "https://srv.latostadora.com/image/falso_es_gracioso_porque_es_verdad--id:a477a171-6d30-419a-aa48-4b43325c52d6;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 13.2,
    "id": "productId-0000021",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162ce86045fc297f93a363b",
    "title": "Slim developer",
    "image": "https://srv.latostadora.com/image/esqueleto_con_teclado--id:c350084f-a7a5-4741-9327-473b8f61f1cd;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 18.9,
    "id": "productId-0000022",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cf0b045fc297f93a363e",
    "title": "Born to code",
    "image": "https://srv.latostadora.com/image/nacido_al_codigo--id:3fb440c3-b8f6-4585-bf31-7405afbc8174;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 18.99,
    "id": "productId-0000023",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cf2f045fc297f93a3641",
    "title": "This it's safe",
    "image": "https://srv.latostadora.com/image/comando_peligroso--id:84c3f841-0450-411b-be4c-9c83b061c2cf;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 20,
    "id": "productId-0000024",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cf4a045fc297f93a3644",
    "title": "Developer",
    "image": "https://srv.latostadora.com/image/friki_-_desarrollador--id:55f9b053-5404-4496-84eb-cf79d9f8db98;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
    "rating": 2,
    "price": 5.99,
    "id": "productId-0000025",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cf64045fc297f93a3647",
    "title": "Hacker",
    "image": "https://srv.latostadora.com/image/hacker--id:be781e70-c2fe-40a3-ad29-41f290a164c7;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 19.9,
    "id": "productId-0000026",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cf85045fc297f93a364a",
    "title": "Select shirt",
    "image": "https://srv.latostadora.com/image/seleccione_imprimir_programador_consulta_geek_grafico--id:900dc664-ebaf-402b-bea6-35f625dabd93;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 15.9,
    "id": "productId-0000027",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cfa6045fc297f93a364d",
    "title": "Not bug",
    "image": "https://srv.latostadora.com/image/not_a_bug--id:ab23d359-a57f-4ee3-b404-552a101a1d34;s:H_A8;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 17.9,
    "id": "productId-0000028",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cfce045fc297f93a3650",
    "title": "Binary",
    "image": "https://srv.latostadora.com/image/codigo_binario_friki--id:d70e3f0a-1c13-4d70-9c3f-57f6564b5a62;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 18.9,
    "id": "productId-0000029",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162cfe6045fc297f93a3653",
    "title": "HTML",
    "image": "https://srv.latostadora.com/image/i_know_html_-_how_to_meet_ladies--id:048a4f67-986b-4b17-9e45-6c2aa72033d6;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 1,
    "price": 19.9,
    "id": "productId-0000030",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d002045fc297f93a3656",
    "title": "Hello world",
    "image": "https://srv.latostadora.com/image/hola_programacion_mundial--id:09dc59e5-1d0c-44d6-891c-4a677c82f3cb;s:H_A15;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 18.6,
    "id": "productId-0000031",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d027045fc297f93a3659",
    "title": "Code glasses",
    "image": "https://srv.latostadora.com/image/code_glases--id:cbdf32e6-c90c-4d94-a670-ce1d2a762045;s:H_J3;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 17.9,
    "id": "productId-0000032",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d0ee045fc297f93a365c",
    "title": "Debugging",
    "image": "https://srv.latostadora.com/image/depuracion_de_regalo_divertido_para_pro--id:fe958ce7-0277-4607-9fef-e36b8b600d0b;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 19.5,
    "id": "productId-0000033",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d10d045fc297f93a365f",
    "title": "Keep calm",
    "image": "https://srv.latostadora.com/image/keep_calm_and_code_c_light--id:b0a16a1d-d97b-4a4e-ba4d-2b11a8cbfb23;s:H_A21;b:f2f2f2;w:520;f:f.jpg",
    "rating": 2,
    "price": 17.9,
    "id": "productId-0000034",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d125045fc297f93a3662",
    "title": "Spinner",
    "image": "https://srv.latostadora.com/image/hombres_de_la__de_amortiguacion--id:1e7ce395-2504-4139-95d6-987e9aeaa254;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 20,
    "id": "productId-0000035",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d149045fc297f93a3665",
    "title": "Android Kit Kat",
    "image": "https://srv.latostadora.com/image/android_kitkat--id:4f3fad08-2385-4a25-9780-ff0e3cf51f56;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 19.9,
    "id": "productId-0000036",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d166045fc297f93a3668",
    "title": "Breaking Builds",
    "image": "https://srv.latostadora.com/image/breaking_builds--id:1eeb94cf-2491-4e62-9382-3f8c61395152;s:H_A20;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 17.9,
    "id": "productId-0000037",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Make fun, Inc.",
    "cif": "B10067422",
    "address": "Av. Delicias, 78 - Bajo"
    },
    "_id": "6162d180045fc297f93a366b",
    "title": "Hacking life",
    "image": "https://srv.latostadora.com/image/hacking_life--id:0c38ba49-d60b-4e42-ae09-bf6019c5059e;s:H_A21;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 14.9,
    "id": "productId-0000038",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d21c045fc297f93a366e",
    "title": "Stars Open Source",
    "image": "https://srv.latostadora.com/image/may_open_source--id:ae7c7095-62d6-40ad-b5eb-1f619cd62086;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 18.9,
    "id": "productId-0000039",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d22e045fc297f93a3671",
    "title": "Docker Zombie",
    "image": "https://srv.latostadora.com/image/zombie_docker--id:3fec85ae-81ca-4208-a806-ed77803a7014;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 17.9,
    "id": "productId-0000040",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d246045fc297f93a3674",
    "title": "Head Body",
    "image": "https://srv.latostadora.com/image/html_2--id:7ff70a59-94e3-4f5a-afdf-7eeab9bc305a;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 16.99,
    "id": "productId-0000041",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d25a045fc297f93a3677",
    "title": "Arial",
    "image": "https://srv.latostadora.com/image/ariel_arial_hipster--id:6b28fd7a-a99f-4523-a25a-d5b9d6e847bc;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 18.9,
    "id": "productId-0000042",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d26c045fc297f93a367a",
    "title": "Nerd mode",
    "image": "https://srv.latostadora.com/image/modo_nerd_en_negro--id:688182ab-8068-4bc3-9e7d-27eeecbb99cd;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 21.5,
    "id": "productId-0000043",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d28b045fc297f93a367d",
    "title": "No comment",
    "image": "https://srv.latostadora.com/image/no_comment_en_blanco--id:595eaee5-5d5d-437a-83ea-f66b845a02b7;s:H_G1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 19.5,
    "id": "productId-0000044",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d29a045fc297f93a3680",
    "title": "Keyboard",
    "image": "https://srv.latostadora.com/image/teclado_ordenador_negro--id:e04158c2-5ca5-4b12-b1fe-e6b26eaad626;s:H_A13;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 17.9,
    "id": "productId-0000045",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d2c3045fc297f93a3683",
    "title": "❤️ PHP",
    "image": "https://srv.latostadora.com/image/me_encanta_php--id:b6b58329-5126-4401-bfae-ac27761d6876;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 21.5,
    "id": "productId-0000046",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d2db045fc297f93a3686",
    "title": "Elements",
    "image": "https://srv.latostadora.com/image/tabla_periodica_del_desarrollador--id:fa2535e9-026f-40d8-80c3-6b6889cd463c;s:H_W1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 4,
    "price": 17.7,
    "id": "productId-0000047",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d2eb045fc297f93a3689",
    "title": "I hate...",
    "image": "https://srv.latostadora.com/image/cosas_que_odio_t_shirt_programador_de_j--id:5f45bf06-3aee-458e-91c6-cf57d5640ca2;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
    "rating": 3,
    "price": 19.5,
    "id": "productId-0000048",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d2fb045fc297f93a368c",
    "title": "Error",
    "image": "https://srv.latostadora.com/image/error_pantallazo_azul__informatica--id:b3f09a5c-92b3-46e0-a56e-b7aa350e2b03;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
    "rating": 2,
    "price": 17.9,
    "id": "productId-0000049",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Crazy shirts, S.L.U.",
    "cif": "A67890444",
    "address": "C/ Yanosequeponer, 10"
    },
    "_id": "6162d320045fc297f93a368f",
    "title": "SQL injection",
    "image": "https://srv.latostadora.com/image/_hombre_inyeccion_sql--id:ccd26d39-2180-44ce-acec-10311edef49c;s:H_A22;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 18,
    "id": "productId-0000050",
    "__v": 0
    },
    {
    "manufacturer": {
    "name": "Jurassic Park, Inc.",
    "cif": "B56789921",
    "address": "Av.Portugalete, 888"
    },
    "_id": "6165dff1eb7dd7e081f259dc",
    "title": "Google dinosaur",
    "image": "https://srv.latostadora.com/image/unable_to_connect_to_the_internet--id:dce1bbc0-f41d-4ee3-a46f-59c0bfa8caf2;s:H_A14;b:f2f2f2;w:520;f:f.jpg",
    "rating": 5,
    "price": 18.9,
    "id": "productId-0000051",
    "__v": 0
    }
    ]

    const data = [
        {
        "manufacturer": {
        "name": "Camisetas Manolita, S.A.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cbf3045fc297f93a360a",
        "title": "Morning Code",
        "image": "https://srv.latostadora.com/image/codigo_de_la_manana--id:540a0c92-381b-43e4-80ad-f11580d55b27;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 20.5,
        "id": "productId-0000011",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cc6e045fc297f93a3610",
        "title": "Why works?",
        "image": "https://srv.latostadora.com/image/el_codigo_del_programador_funciona_por_--id:02294e51-22dd-47ca-bb68-821637c70156;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 19.5,
        "id": "productId-0000013",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cc97045fc297f93a3613",
        "title": "Devops Ninja",
        "image": "https://srv.latostadora.com/image/devops_ninja_white--id:abff87f0-3618-430c-a607-28e57a7cc269;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 17.9,
        "id": "productId-0000014",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162ccb6045fc297f93a3616",
        "title": "Docker Kill",
        "image": "https://srv.latostadora.com/image/docker_kill--id:fa5318a9-b0ae-4a6c-a950-088628573aba;s:H_A27;b:f2f2f2;w:520;f:f.jpg",
        "rating": 2,
        "price": 18.9,
        "id": "productId-0000015",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Camisetas seta, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162ccd1045fc297f93a3619",
        "title": "Ready",
        "image": "https://srv.latostadora.com/image/ready_basic_amstrad_cpc--id:725d1666-d7ba-44e2-9fa4-a9de0bc105df;s:H_A22;b:f2f2f2;w:520;f:f.jpg",
        "rating": 2,
        "price": 18.9,
        "id": "productId-0000016",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162ccf5045fc297f93a361c",
        "title": "Hate CSS (me too)",
        "image": "https://srv.latostadora.com/image/i_hate_css--id:544793ee-ea68-46a3-aa17-75f94230b912;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 15.9,
        "id": "productId-0000017",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cd38045fc297f93a3623",
        "title": "Dev life",
        "image": "https://srv.latostadora.com/image/eat_coffee_code_repeat_light--id:efc76285-ecb5-47a1-a85b-f07e85d911fd;s:H_A20;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 15.9,
        "id": "productId-0000018",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cd56045fc297f93a3626",
        "title": "Senior developer",
        "image": "https://srv.latostadora.com/image/senor_developer--id:66f3653b-388b-405c-9248-1cf75de474e4;s:H_A2;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 17.9,
        "id": "productId-0000019",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Code dress, S.L.",
        "cif": "B10458999",
        "address": "Pol. Campero - parc. 14-b"
        },
        "_id": "6162cd7d045fc297f93a3629",
        "title": "Coding if",
        "image": "https://srv.latostadora.com/image/regalo_divertido_para_auriculares_progr--id:8d013c90-b794-4c35-969f-b9036143a9ea;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 20.5,
        "id": "productId-0000020",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cdcb045fc297f93a362c",
        "title": "!false is true",
        "image": "https://srv.latostadora.com/image/falso_es_gracioso_porque_es_verdad--id:a477a171-6d30-419a-aa48-4b43325c52d6;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 13.2,
        "id": "productId-0000021",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162ce86045fc297f93a363b",
        "title": "Slim developer",
        "image": "https://srv.latostadora.com/image/esqueleto_con_teclado--id:c350084f-a7a5-4741-9327-473b8f61f1cd;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 18.9,
        "id": "productId-0000022",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cf0b045fc297f93a363e",
        "title": "Born to code",
        "image": "https://srv.latostadora.com/image/nacido_al_codigo--id:3fb440c3-b8f6-4585-bf31-7405afbc8174;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 18.99,
        "id": "productId-0000023",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cf2f045fc297f93a3641",
        "title": "This it's safe",
        "image": "https://srv.latostadora.com/image/comando_peligroso--id:84c3f841-0450-411b-be4c-9c83b061c2cf;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 20,
        "id": "productId-0000024",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cf4a045fc297f93a3644",
        "title": "Developer",
        "image": "https://srv.latostadora.com/image/friki_-_desarrollador--id:55f9b053-5404-4496-84eb-cf79d9f8db98;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
        "rating": 2,
        "price": 5.99,
        "id": "productId-0000025",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cf64045fc297f93a3647",
        "title": "Hacker",
        "image": "https://srv.latostadora.com/image/hacker--id:be781e70-c2fe-40a3-ad29-41f290a164c7;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 19.9,
        "id": "productId-0000026",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cf85045fc297f93a364a",
        "title": "Select shirt",
        "image": "https://srv.latostadora.com/image/seleccione_imprimir_programador_consulta_geek_grafico--id:900dc664-ebaf-402b-bea6-35f625dabd93;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 15.9,
        "id": "productId-0000027",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cfa6045fc297f93a364d",
        "title": "Not bug",
        "image": "https://srv.latostadora.com/image/not_a_bug--id:ab23d359-a57f-4ee3-b404-552a101a1d34;s:H_A8;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 17.9,
        "id": "productId-0000028",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cfce045fc297f93a3650",
        "title": "Binary",
        "image": "https://srv.latostadora.com/image/codigo_binario_friki--id:d70e3f0a-1c13-4d70-9c3f-57f6564b5a62;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 18.9,
        "id": "productId-0000029",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162cfe6045fc297f93a3653",
        "title": "HTML",
        "image": "https://srv.latostadora.com/image/i_know_html_-_how_to_meet_ladies--id:048a4f67-986b-4b17-9e45-6c2aa72033d6;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 1,
        "price": 19.9,
        "id": "productId-0000030",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d002045fc297f93a3656",
        "title": "Hello world",
        "image": "https://srv.latostadora.com/image/hola_programacion_mundial--id:09dc59e5-1d0c-44d6-891c-4a677c82f3cb;s:H_A15;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 18.6,
        "id": "productId-0000031",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d027045fc297f93a3659",
        "title": "Code glasses",
        "image": "https://srv.latostadora.com/image/code_glases--id:cbdf32e6-c90c-4d94-a670-ce1d2a762045;s:H_J3;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 17.9,
        "id": "productId-0000032",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d0ee045fc297f93a365c",
        "title": "Debugging",
        "image": "https://srv.latostadora.com/image/depuracion_de_regalo_divertido_para_pro--id:fe958ce7-0277-4607-9fef-e36b8b600d0b;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 19.5,
        "id": "productId-0000033",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d10d045fc297f93a365f",
        "title": "Keep calm",
        "image": "https://srv.latostadora.com/image/keep_calm_and_code_c_light--id:b0a16a1d-d97b-4a4e-ba4d-2b11a8cbfb23;s:H_A21;b:f2f2f2;w:520;f:f.jpg",
        "rating": 2,
        "price": 17.9,
        "id": "productId-0000034",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d125045fc297f93a3662",
        "title": "Spinner",
        "image": "https://srv.latostadora.com/image/hombres_de_la__de_amortiguacion--id:1e7ce395-2504-4139-95d6-987e9aeaa254;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 20,
        "id": "productId-0000035",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d149045fc297f93a3665",
        "title": "Android Kit Kat",
        "image": "https://srv.latostadora.com/image/android_kitkat--id:4f3fad08-2385-4a25-9780-ff0e3cf51f56;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 19.9,
        "id": "productId-0000036",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d166045fc297f93a3668",
        "title": "Breaking Builds",
        "image": "https://srv.latostadora.com/image/breaking_builds--id:1eeb94cf-2491-4e62-9382-3f8c61395152;s:H_A20;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 17.9,
        "id": "productId-0000037",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Make fun, Inc.",
        "cif": "B10067422",
        "address": "Av. Delicias, 78 - Bajo"
        },
        "_id": "6162d180045fc297f93a366b",
        "title": "Hacking life",
        "image": "https://srv.latostadora.com/image/hacking_life--id:0c38ba49-d60b-4e42-ae09-bf6019c5059e;s:H_A21;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 14.9,
        "id": "productId-0000038",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d21c045fc297f93a366e",
        "title": "Stars Open Source",
        "image": "https://srv.latostadora.com/image/may_open_source--id:ae7c7095-62d6-40ad-b5eb-1f619cd62086;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 18.9,
        "id": "productId-0000039",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d22e045fc297f93a3671",
        "title": "Docker Zombie",
        "image": "https://srv.latostadora.com/image/zombie_docker--id:3fec85ae-81ca-4208-a806-ed77803a7014;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 17.9,
        "id": "productId-0000040",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d246045fc297f93a3674",
        "title": "Head Body",
        "image": "https://srv.latostadora.com/image/html_2--id:7ff70a59-94e3-4f5a-afdf-7eeab9bc305a;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 16.99,
        "id": "productId-0000041",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d25a045fc297f93a3677",
        "title": "Arial",
        "image": "https://srv.latostadora.com/image/ariel_arial_hipster--id:6b28fd7a-a99f-4523-a25a-d5b9d6e847bc;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 18.9,
        "id": "productId-0000042",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d26c045fc297f93a367a",
        "title": "Nerd mode",
        "image": "https://srv.latostadora.com/image/modo_nerd_en_negro--id:688182ab-8068-4bc3-9e7d-27eeecbb99cd;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 21.5,
        "id": "productId-0000043",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d28b045fc297f93a367d",
        "title": "No comment",
        "image": "https://srv.latostadora.com/image/no_comment_en_blanco--id:595eaee5-5d5d-437a-83ea-f66b845a02b7;s:H_G1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 19.5,
        "id": "productId-0000044",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d29a045fc297f93a3680",
        "title": "Keyboard",
        "image": "https://srv.latostadora.com/image/teclado_ordenador_negro--id:e04158c2-5ca5-4b12-b1fe-e6b26eaad626;s:H_A13;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 17.9,
        "id": "productId-0000045",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d2c3045fc297f93a3683",
        "title": "❤️ PHP",
        "image": "https://srv.latostadora.com/image/me_encanta_php--id:b6b58329-5126-4401-bfae-ac27761d6876;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 21.5,
        "id": "productId-0000046",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d2db045fc297f93a3686",
        "title": "Elements",
        "image": "https://srv.latostadora.com/image/tabla_periodica_del_desarrollador--id:fa2535e9-026f-40d8-80c3-6b6889cd463c;s:H_W1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 4,
        "price": 17.7,
        "id": "productId-0000047",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d2eb045fc297f93a3689",
        "title": "I hate...",
        "image": "https://srv.latostadora.com/image/cosas_que_odio_t_shirt_programador_de_j--id:5f45bf06-3aee-458e-91c6-cf57d5640ca2;s:H_A1;b:f2f2f2;w:520;f:f.jpg",
        "rating": 3,
        "price": 19.5,
        "id": "productId-0000048",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d2fb045fc297f93a368c",
        "title": "Error",
        "image": "https://srv.latostadora.com/image/error_pantallazo_azul__informatica--id:b3f09a5c-92b3-46e0-a56e-b7aa350e2b03;s:H_A5;b:f2f2f2;w:520;f:f.jpg",
        "rating": 2,
        "price": 17.9,
        "id": "productId-0000049",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Crazy shirts, S.L.U.",
        "cif": "A67890444",
        "address": "C/ Yanosequeponer, 10"
        },
        "_id": "6162d320045fc297f93a368f",
        "title": "SQL injection",
        "image": "https://srv.latostadora.com/image/_hombre_inyeccion_sql--id:ccd26d39-2180-44ce-acec-10311edef49c;s:H_A22;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 18,
        "id": "productId-0000050",
        "__v": 0
        },
        {
        "manufacturer": {
        "name": "Jurassic Park, Inc.",
        "cif": "B56789921",
        "address": "Av.Portugalete, 888"
        },
        "_id": "6165dff1eb7dd7e081f259dc",
        "title": "Google dinosaur",
        "image": "https://srv.latostadora.com/image/unable_to_connect_to_the_internet--id:dce1bbc0-f41d-4ee3-a46f-59c0bfa8caf2;s:H_A14;b:f2f2f2;w:520;f:f.jpg",
        "rating": 5,
        "price": 18.9,
        "id": "productId-0000051",
        "__v": 0
        }
        ]

        const token = "";
        const id = "productId-0000051";

    export {products, data, token, id}
