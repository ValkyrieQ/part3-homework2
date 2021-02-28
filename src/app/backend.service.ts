import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getHome() {
    return 'Short portfolio of <b>Mr.Chawengwut</b>';
  }

  getAbout() {
    return `I've wide range of Developing skill. Such as Front-End, Back-End, DB and
    DevOps skills. Another strongest soft skill about "Analysis Skill and
    Communication Skill". I can gathering requirement thoroughly from users and
    analyze/break down to developing tasks like BA/SA. And also can communicate
    with user in order to demonstration each sprints, getting feedback and support
    applications's issues with sitting between users and developer. I can
    understand point of view both of them.`;
  }

  getSkills() {
    return [
      'Angular',
      'Node',
      'MySQL, Oracle',
      'DevOps (Docker, Kubernetes, Openshift, Jenkins)',
      'AWS and Azure',
    ];
  }

  getContactDetails() {
    return {
      phoneNo: '061-xxx-xxxx',
      email: 'chawengwut@gmail.com',
    };
  }

  getPortfolio() {
    return `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error earum suscipit qui ullam perspiciatis unde doloribus modi architecto porro? Cumque quam nulla impedit nisi, fuga dolorum iure sunt quos, unde excepturi quia, consequatur consequuntur. Recusandae deserunt quisquam, molestiae nesciunt ex vero rem itaque at. Mollitia, nemo. In laudantium a deleniti dolores nisi placeat totam cumque perferendis, quis vel harum ipsum dolor vero autem repellendus tempora fuga alias dolorum nam sunt aperiam. Quibusdam temporibus a aliquam fuga autem enim maxime quisquam saepe molestias doloribus accusantium deleniti minus vel, totam nemo tempora harum blanditiis omnis nobis itaque et quia sit eligendi placeat? Ad ratione nulla vitae quaerat corporis nostrum placeat minima voluptatibus aliquam nobis aspernatur expedita dicta inventore debitis tempore itaque ab, consequatur deleniti eius. Voluptate modi consectetur nobis animi omnis fuga ratione laborum ipsam facere non id architecto suscipit soluta eius ducimus repellendus, explicabo expedita earum fugit rerum, illo repudiandae sunt amet molestias. Possimus incidunt dolore perspiciatis, amet at ipsa esse, tempora dolor, quod natus magni laudantium? Eligendi optio, ipsam laudantium rem aspernatur quas debitis sint eius a. Eos quod facilis nihil dolorum reprehenderit iste numquam, hic, dolore saepe voluptatum similique unde reiciendis. Consequatur neque commodi quae. A, quo obcaecati. Facere.`;
  }
}
