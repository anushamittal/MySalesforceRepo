package Helper;


import org.apache.xpath.SourceTree;

import java.util.Random;

/**
 * Created by Swarn on 5/19/2017.
 */
public class RandomNameGenerator {

    private char[] array = {'a', 'b', 'c'};

    private char getRanadomchar(){
        return array[random(array.length)];
    }

    private  int random(int length){
        return new Random().nextInt(length);
    }
    protected RandomNameGenerator(){
        boolean running = true;
        int count = 0;
        int max= 5;
        while(running){
            StringBuilder sb = new StringBuilder();
            int size = random(3)+random(5);
            for(int i= 0;i < size; i++){
                sb.append(getRanadomchar());
            }
            System.out.println("String:" + sb.toString());
            if(count++ == max){
                running = false;
                System.out.println("finished");
            }

        }
    }
    public static void main(String ar[]){
        new RandomNameGenerator();
    }

}


