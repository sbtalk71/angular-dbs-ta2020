import { JsonPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BlogPost } from './BlogPost';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TestService]
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("it should return 'testing service'", () => {
    expect(service.getValue()).toEqual('testing service');
  });

  it("It should test Observable value", (done: DoneFn) => {

    
      service.getDataAsObservable().subscribe(
        data => {
          console.log(data);
          expect(data).toContain("hello");
          done();
        }
      );
    });


  it("it should return id of Blog", (done:DoneFn) => {
    
    let blog: BlogPost;

    service.getBlogPost(1).subscribe(data => {
      console.log(data.userId);
     
      expect(data.id).toEqual(1);
      done();
    });
  });

});
