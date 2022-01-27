/* tslint:disable */
/* eslint-disable */
/**
 * r04 API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {SupplierParams}
     * @memberof InlineObject
     */
    'supplier': SupplierParams;
}
/**
 * 
 * @export
 * @interface InlineObject1
 */
export interface InlineObject1 {
    /**
     * 
     * @type {SupplierParams}
     * @memberof InlineObject1
     */
    'supplier': SupplierParams;
}
/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 
     * @type {ProductParams}
     * @memberof InlineObject2
     */
    'product': ProductParams;
}
/**
 * 
 * @export
 * @interface InlineObject3
 */
export interface InlineObject3 {
    /**
     * 
     * @type {ProductParams}
     * @memberof InlineObject3
     */
    'product': ProductParams;
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {Array<Supplier>}
     * @memberof InlineResponse200
     */
    'suppliers': Array<Supplier>;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {Supplier}
     * @memberof InlineResponse2001
     */
    'supplier': Supplier;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    /**
     * 
     * @type {Array<Product>}
     * @memberof InlineResponse2002
     */
    'products': Array<Product>;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {Product}
     * @memberof InlineResponse2003
     */
    'product': Product;
}
/**
 * 
 * @export
 * @interface InlineResponse422
 */
export interface InlineResponse422 {
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse422
     */
    'messages': Array<string>;
}
/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface ProductParams
 */
export interface ProductParams {
    /**
     * 
     * @type {string}
     * @memberof ProductParams
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface Supplier
 */
export interface Supplier {
    /**
     * 
     * @type {number}
     * @memberof Supplier
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof Supplier
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface SupplierParams
 */
export interface SupplierParams {
    /**
     * 
     * @type {string}
     * @memberof SupplierParams
     */
    'name': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteProduct', 'id', id)
            const localVarPath = `/api/v1/products/${id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSupplier: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSupplier', 'id', id)
            const localVarPath = `/api/v1/suppliers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getProduct', 'id', id)
            const localVarPath = `/api/v1/products/${id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProducts: async (supplierId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'supplierId' is not null or undefined
            assertParamExists('getProducts', 'supplierId', supplierId)
            const localVarPath = `/api/v1/suppliers/${supplierId}/products`
                .replace(`{${"supplierId"}}`, encodeURIComponent(String(supplierId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplier: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSupplier', 'id', id)
            const localVarPath = `/api/v1/suppliers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuppliers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/suppliers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProduct: async (id: number, inlineObject3: InlineObject3, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchProduct', 'id', id)
            // verify required parameter 'inlineObject3' is not null or undefined
            assertParamExists('patchProduct', 'inlineObject3', inlineObject3)
            const localVarPath = `/api/v1/products/${id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject3, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSupplier: async (id: number, inlineObject1: InlineObject1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchSupplier', 'id', id)
            // verify required parameter 'inlineObject1' is not null or undefined
            assertParamExists('patchSupplier', 'inlineObject1', inlineObject1)
            const localVarPath = `/api/v1/suppliers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProduct: async (supplierId: number, inlineObject2: InlineObject2, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'supplierId' is not null or undefined
            assertParamExists('postProduct', 'supplierId', supplierId)
            // verify required parameter 'inlineObject2' is not null or undefined
            assertParamExists('postProduct', 'inlineObject2', inlineObject2)
            const localVarPath = `/api/v1/suppliers/${supplierId}/products`
                .replace(`{${"supplier_id"}}`, encodeURIComponent(String(supplierId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject2, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSupplier: async (inlineObject: InlineObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject' is not null or undefined
            assertParamExists('postSupplier', 'inlineObject', inlineObject)
            const localVarPath = `/api/v1/suppliers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProduct(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProduct(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSupplier(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSupplier(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProduct(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProduct(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProducts(supplierId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProducts(supplierId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupplier(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupplier(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSuppliers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSuppliers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchProduct(id: number, inlineObject3: InlineObject3, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchProduct(id, inlineObject3, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchSupplier(id: number, inlineObject1: InlineObject1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchSupplier(id, inlineObject1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postProduct(supplierId: number, inlineObject2: InlineObject2, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2003>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postProduct(supplierId, inlineObject2, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSupplier(inlineObject: InlineObject, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSupplier(inlineObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProduct(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteProduct(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSupplier(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteSupplier(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProduct(id: number, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.getProduct(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProducts(supplierId: number, options?: any): AxiosPromise<InlineResponse2002> {
            return localVarFp.getProducts(supplierId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupplier(id: number, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.getSupplier(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuppliers(options?: any): AxiosPromise<InlineResponse200> {
            return localVarFp.getSuppliers(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject3} inlineObject3 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchProduct(id: number, inlineObject3: InlineObject3, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.patchProduct(id, inlineObject3, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {InlineObject1} inlineObject1 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchSupplier(id: number, inlineObject1: InlineObject1, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.patchSupplier(id, inlineObject1, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} supplierId 
         * @param {InlineObject2} inlineObject2 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postProduct(supplierId: number, inlineObject2: InlineObject2, options?: any): AxiosPromise<InlineResponse2003> {
            return localVarFp.postProduct(supplierId, inlineObject2, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {InlineObject} inlineObject 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSupplier(inlineObject: InlineObject, options?: any): AxiosPromise<InlineResponse2001> {
            return localVarFp.postSupplier(inlineObject, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteProduct(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deleteProduct(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deleteSupplier(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deleteSupplier(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProduct(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getProduct(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} supplierId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProducts(supplierId: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getProducts(supplierId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getSupplier(id: number, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getSupplier(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getSuppliers(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getSuppliers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {InlineObject3} inlineObject3 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchProduct(id: number, inlineObject3: InlineObject3, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchProduct(id, inlineObject3, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {InlineObject1} inlineObject1 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public patchSupplier(id: number, inlineObject1: InlineObject1, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).patchSupplier(id, inlineObject1, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} supplierId 
     * @param {InlineObject2} inlineObject2 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postProduct(supplierId: number, inlineObject2: InlineObject2, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postProduct(supplierId, inlineObject2, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {InlineObject} inlineObject 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postSupplier(inlineObject: InlineObject, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).postSupplier(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }
}


