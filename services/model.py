from langchain_community.llms import ollama
from langchain.prompts import PromptTemplate

def blogGenerator(blogTopic, blogStyle, words): 
    
    llm = ollama.Ollama(model="gemma:2b")
    
    print(words)
    
    blog_template = PromptTemplate.from_template(
        """
            Assume, that you are a professional blog writer.
            Now, write a blog on {blogTopic} for {blogStyle} within {words} words
        """
    )
    
    prompt = blog_template.format(blogTopic=blogTopic, blogStyle=blogStyle, words=words)
    
    response = llm.invoke(prompt)
    
    return response
    


def genAdvtise():
    pass

