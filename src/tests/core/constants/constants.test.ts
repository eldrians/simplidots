import { headers, constant } from '../../../app/core/constants/constants';
import { environment } from '../../../environments/environment';

describe('constants', () => {
  it('should have the correct baseUrl', () => {
    expect(constant.baseUrl).toEqual('https://api.themoviedb.org/3');
  });
});

describe('headers', () => {
  it('should have the correct Authorization header', () => {
    const expectedAuthorization = `Bearer ${environment.auth}`;
    expect(headers.get('Authorization')).toEqual(expectedAuthorization);
  });

  it('should have the correct Content-Type header', () => {
    expect(headers.get('Content-Type')).toEqual('application/json');
  });
});
