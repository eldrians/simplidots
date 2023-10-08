import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from '../../../app/core/services/user.service';
import { environment } from '../../../environments/environment';
import { constant } from '../../../app/core/constants/constants';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user favorites', () => {
    const mockFavorites: any = {
      // Define your mock favorites data here
    };

    service.getFavorites().subscribe((response) => {
      expect(response).toEqual(mockFavorites);
    });

    const url = `${constant.baseUrl}/account/372/favorite/movies?api_key=${environment.apiKey}`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');

    // Respond with mock data
    req.flush(mockFavorites);
  });

  it('should handle favorite addition or removal', () => {
    const mockData: any = {
      // Define your mock data for favoriteHandler here
    };

    service.favoriteHandler(mockData).subscribe((response) => {
      // You can assert the response if needed
      expect(response).toBeDefined();
    });

    const url = `${constant.baseUrl}/account/372/favorite?api_key=${environment.apiKey}`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('POST');

    // Respond with a success status (assuming a successful request)
    req.flush({ status: 'success' });
  });
});
